const page = require('page'),
      empty = require('empty-element'),
      template = require('./template'),
      request = require('superagent'),
      header = require('../header'),
      utils = require('../utils'),
      io = require('socket.io-client'),
      picture = require('../post-card'),
      $ = require('jquery');

const socker = io.connect('https://ws.mortem45.com')
page('/', utils.loadAuth, header, loadPosts, function(ctx ,next){
    let main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.posts));
})

socker.on('image', function (image) {
<<<<<<< HEAD
    let postEl = document.getElementById('post-container');
=======
    let postEl = document.getElementById('post-container'); 
>>>>>>> 934b385e7c0ff229269d29caead2eeec42129ccb
    let first =  postEl.firstElementChild;
    let img = picture(image);
    postEl.insertBefore(img, first)
})

function loadPosts(ctx, next) {
    request
        .get('/api/posts')
        .end(function (err, res) {
            if (err) return console.log(err);
            ctx.posts = res.body;
            next();
        })
}
