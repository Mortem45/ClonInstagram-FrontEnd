const page = require('page');

page('/', function (ctx, next) {
    let main = document.getElementById('main-container');
    main.innerHTML = '<a href="/signup">signup</a>';
})