const page = require('page'),
      empty = require('empty-element'),
      template = require('./template'),
      request = require('superagent'),
      header = require('../header'),
      utils = require('../utils'),
      io = require('socket.io-client'),
      picture = require('../post-card'),
      $ = require('jquery');

const socker = io.connect('http://localhost:5151')
page('/', utils.loadAuth, header, loadPosts, function(ctx ,next){
    let main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.posts));
})

socker.on('image', function (image) {
    let postEl = document.getElementById('post-container');
    let first =  postEl.firstChild;
    let img = picture(image);
    fetch(`/api/post/${image.publicId}`)
        .then(res => console.log())
        .catch( error => {
            postEl.insertBefore(img, first);
        })
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
