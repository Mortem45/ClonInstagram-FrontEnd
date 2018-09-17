const page = require('page');
const main = document.getElementById('main-container');

page('/', function (ctx, next) {
    main.innerHTML = 'HOme <a href="/signup">signup</a>'
})

page('/signup', function (ctx, next) {
    main.innerHTML = 'signup <a href="/">Home</a>'
})

page();
