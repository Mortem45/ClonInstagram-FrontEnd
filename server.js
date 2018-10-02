var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/',function (req, res){ 
    res.render('index.pug', {title: 'Instagram'});
});
app.get('/signup',function (req, res){ 
    res.render('index.pug', {title: 'Instagram - Signup'});
});
app.get('/signin',function (req, res){
     res.render('index.pug', {title: 'Instagram - Signin'});
});

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
    setTimeout(()=>{
        res.send(posts);
    },2000);
})

app.listen(3000, function (err) { 
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log('server escuchando en puerto 3000')
})