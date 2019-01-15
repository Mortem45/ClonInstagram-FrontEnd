const express = require('express'),
        multer = require('multer'),
        ext = require('file-extension'),
        config = require('./config'),
        aws = require('aws-sdk'),
        multerS3 = require('multer-s3'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        expressSession = require('express-session'),
        passport = require('passport'),
        cloninstagram = require('cloninstagram-client'),
        auth = require('./auth'),
        path = require('path'),
	    MemoryStore = require('memorystore')(expressSession);

        const Port = process.env.PORT || 5050;

        let s3 = new aws.S3({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey
        })

let storage = multerS3({
    s3: s3,
    bucket: 'cloninstagram',
    acl: 'public-read',  //access control list
    metadata: function (req, file, cb) {
        cb(null, { fielName: file.fieldname })
    },
    key: function (req, file, cb) {
        cb(null,  + Date.now() + '-.' + ext(file.originalname) )
    }
})

let client = cloninstagram.createClient(config.client);
let upload = multer({ storage: storage }).single('post');

let app = express();

app.set(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(expressSession({
    store: new MemoryStore({
       checkPeriod: 86400000
    }),
    secret: config.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

passport.use(auth.localStrategy);
passport.use(auth.facebookStrategy);
passport.deserializeUser(auth.deserializeUser);
passport.serializeUser(auth.serializeUser);

app.get('/',function (req, res){
    res.render('index.pug', {title: 'Instagram'});
});

app.get('/signup',function (req, res){
    res.render('index.pug', {title: 'Instagram - Signup'});
});

app.post('/signup', function (req, res) {
    let user = req.body;
	console.log(user)
    client.saveUser(user, function (err, usr) {
        if (err) return res.status(500).send(err.message) ;
        res.redirect('/signin');
    })
})

app.get('/signin',function (req, res){
     res.render('index.pug', {title: 'Instagram - Signin'});
});

app.post('/login', passport.authenticate('local', {
         successRedirect: '/',
         failureRedirect: '/signin'
}));

app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/signin'
    }));

function ensureAuth (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).send({ error: 'not authenticated' })
}

app.get('/api/post/:id', function (req, res) {
    let id = req.params.id
    client.getPicture(id, function (err, post) {
        if (err) return res.status(500).send(err.message);
        res.send(post);
    })

})
app.get('/whoami', function (req, res) {
    if (req.isAuthenticated()) {
        return res.json(req.user);
    }
    res.json({ auth: false })
})

app.get('/whoami2', function (req, res) {
    if (req.isAuthenticated() == true) {
        return res.json({ auth: true })
    } else {
        res.json({ auth: false })
    }
})

app.get('/api/posts', function (req, res) {
    client.listPictures(function (err, posts) {
        if ( err) return res.send([]);
	 res.send(posts);
    })
})
app.post('/api/posts', ensureAuth, function (req, res) {
    upload(req, res, function(err){
        if(err){
            return res.status(500).send(`error uploading file: ${err.message}`)
        }
        let user = req.user;
        let token = req.user.token;
        let username = req.user.username;
        let description = req.body.description;
        let src = req.file.location;

        client.savePicture({
            src: src,
            userId: username,
            likes: 0,
            description: description,
            user: {
                username: username,
                avatar: user.avatar,
                name: user.name
            }
        }, token, function (err, img) {
            if (err)  return res.status(500).send(err.message);
            res.status(200).send(`file uploaded: ${req.file.location}`);
        })

    })
})

app.post('/api/post/:id/like',  function (req, res) {
    if  (req.isAuthenticated() == true){
        let id = req.params.id
         client.likePicture(id , function (err, img) {
            if (err)  return res.status(500).send(err.message);
            res.status(200).send('hola')
        })
    } else{
        return res.status(404).send( { error: 'not authenticated' } )
    }
})
app.get('/api/user/:username', function (req, res) {
   let username = req.params.username;
   client.getUser(username, function (err, user) {
       if (err) return res.status(404).send( { error: 'user not found' } )
        res.send(user);
   });
})

app.get('/:username', function (req, res) {
    res.render('index', {title: `Instagram - ${req.params.username}` })
})

app.listen(Port, function (err) {
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log(`server escuchando en puerto ${Port}`)
})

