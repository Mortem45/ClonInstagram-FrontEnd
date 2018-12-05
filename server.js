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
        auth = require('./auth');
const port = process.env.PORT || 5050;

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
    secret: config.secret,
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');

app.use(express.static('public'));

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
    failureRedirect: '/signin',
    failureFlash:true
}));

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/',
    failureRedirect: '/signin',
    failureFlash:true
}));

function ensureAuth (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    res.status(401).send({ error: 'not authenticated' })
}

app.get('/api/posts', function (req, res) {
    let posts = [
        {
            user: {
                username: 'Brandon',
                avatar: 'post.jpg',
                urlperfil: 'mortem45'
            },
            url: 'https://instagram.fgua2-1.fna.fbcdn.net/vp/3ad46f9bb14e57f6e9facc540081e4b2/5C3EBCB5/t51.2885-15/e35/28765706_624789634522422_5700410002615828480_n.jpg',
            likes: 0,
            liked: false,
            createdAt: new Date().getTime()
        },
        {
            user: {
                username: 'Steven',
                avatar: 'post.jpg',
                urlperfil: 'mortem45'
            },
            url: 'https://instagram.fgua2-1.fna.fbcdn.net/vp/7968f203d1dbe5970c23d9f2ccbd70fa/5C2DDC26/t51.2885-15/e35/33476366_237946453644827_8977099479685529600_n.jpg',
            likes: 1,
            liked: true,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ];
        res.send(posts);
})

app.post('/api/posts', ensureAuth, function (req, res) {
    upload(req, res, function(err){
        if(err){
            return res.status(500).send("error uploading file")
        }
        res.status(200).send('file uploaded')
    })
})

app.get('/api/user/:username', function (req, res) {
    const user = {
        username: 'mortem45',
        avatar: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/08752db88960c76fa4dbef02e2d209d6/5CA30568/t51.2885-19/s150x150/14624640_1249069575143256_4371287421740908544_a.jpg',
        pictures: [
            {
                id: 1,
                src: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/cab020c00eef9b03a124965853b1325a/5C913FFD/t51.2885-15/sh0.08/e35/s640x640/45597873_369326860480856_7475198358789429575_n.jpg',
                likes: 3
            },
            {
                id: 2,
                src: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/dc92ae8aec411f7d38972d0c1118fcba/5CAF59EF/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/44907918_263287704387961_8402845867438998397_n.jpg',
                likes: 6
            },
            {
                id: 3,
                src: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/0b7adf2f51842572d7c9b14d04e53a41/5C90E26D/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/43985907_340863496472758_5281305871541005837_n.jpg',
                likes: 8
            },{
                id: 4,
                src: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/cab020c00eef9b03a124965853b1325a/5C913FFD/t51.2885-15/sh0.08/e35/s640x640/45597873_369326860480856_7475198358789429575_n.jpg',
                likes: 3
            },
            {
                id: 5,
                src: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/dc92ae8aec411f7d38972d0c1118fcba/5CAF59EF/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/44907918_263287704387961_8402845867438998397_n.jpg',
                likes: 6
            },
            {
                id: 6,
                src: 'https://instagram.fgua3-2.fna.fbcdn.net/vp/0b7adf2f51842572d7c9b14d04e53a41/5C90E26D/t51.2885-15/sh0.08/e35/c0.135.1080.1080/s640x640/43985907_340863496472758_5281305871541005837_n.jpg',
                likes: 8
            }
        ]
    }
    res.send(user);
})
app.get('/:username', function (req, res) {
    res.render('index', {title: `Instagram - ${req.params.username}` })
})

app.listen(port, function (err) {
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log(`server escuchando en puerto ${port}`)
})