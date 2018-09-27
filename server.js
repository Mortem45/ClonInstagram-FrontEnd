var express = require('express');
var app = express();


app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/',function (req, res){ res.render('index.pug')})
app.get('/signup',function (req, res){ res.render('index.pug')})
app.get('/signin',function (req, res){ res.render('index.pug')})


app.listen(3000, function (err) { 
    if (err) return console.log('Hubo un error'), process.exit(1);
    console.log('server escuchando en puerto 3000')
})