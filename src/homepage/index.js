const page = require('page'),
      empty = require('empty-element'),
      template = require('./template');
      
page('/',function(ctx ,next){
    let main = document.getElementById('main-container');
    let posts = [1, 2, 3, 4, 5];
    empty(main).appendChild(template(posts));
})