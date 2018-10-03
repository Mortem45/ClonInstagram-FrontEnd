const page = require('page'),
      empty = require('empty-element'),
      template = require('./template'),
      request = require('superagent');
      
page('/', loadPosts, function(ctx ,next){
    let main = document.getElementById('main-container');
    empty(main).appendChild(template(ctx.posts));
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
