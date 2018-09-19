<<<<<<< HEAD
const page = require('page'),
      empty = require('empty-element'),
      template = require('./template');
      
page('/signin',function(ctx ,next){
    let main = document.getElementById('main-container');
    empty(main).appendChild(template);
=======
const page = require('page');

page('/', function (ctx, next) {
    let main = document.getElementById('main-container');
    main.innerHTML = '<a href="/signup">signup</a>';
>>>>>>> 97e69c240b9317156b48002e10e157f638e10323
})