const page = require('page'),
    empty = require('empty-element'),
    template = require('./template');

page('/signup', function (ctx, next) {
    let main = document.getElementById('main-container');
    empty(main).appendChild(template);
})


