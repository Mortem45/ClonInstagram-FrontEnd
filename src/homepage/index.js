const page = require('page'),
      empty = require('empty-element'),
      template = require('./template');
      
page('/',function(ctx ,next){
    let main = document.getElementById('main-container');
    let posts = [
        {
            user: {
                username: 'Brandon',
                avatar: 'post.jpg',
                urlperfil: 'mortem45'
            },
            url: 'https://instagram.fgua2-1.fna.fbcdn.net/vp/3ad46f9bb14e57f6e9facc540081e4b2/5C3EBCB5/t51.2885-15/e35/28765706_624789634522422_5700410002615828480_n.jpg',
            likes: 10,
            liked: true,
            createdAt: new Date()
        },
        {
            user: {
                username: 'Steven',
                avatar: 'post.jpg',
                urlperfil: 'mortem45'
            },
            url: 'https://instagram.fgua2-1.fna.fbcdn.net/vp/7968f203d1dbe5970c23d9f2ccbd70fa/5C2DDC26/t51.2885-15/e35/33476366_237946453644827_8977099479685529600_n.jpg',
            likes: 15,
            liked: false,
            createdAt: new Date().setDate(new Date().getDate() - 10)
        }
    ];


    empty(main).appendChild(template(posts));
})