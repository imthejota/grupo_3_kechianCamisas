const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const start = () => console.log('Starting server');
server.listen(port, start());

server.set('views', __dirname, './views');
server.set('view engine', 'ejs')

const path = require('path');
const public = path.join(__dirname, '../public');

const statics = express.static(public);

server.use(statics);


server.get('/', function(req, res) {
    let file = path.join(__dirname, 'views', 'index.ejs');
    res.render(file);
})

server.get('/productDetail', function(req, res) {
    let file = path.join(__dirname, 'views', 'product' , 'productDetail.ejs');
    res.render(file);
})

server.get('/productCart', function(req, res) {
    let file = path.join(__dirname, 'views','product' , 'productCart.ejs');
    res.render(file);
})

server.get('/register', function(req, res) {
    let file = path.join(__dirname, 'views', 'user', 'register.ejs');
    res.render(file);
})

/* server.post('/register', function(req, res) {
    res.redirect("/home")
}) */

server.get('/login', function(req, res) {
    let file = path.join(__dirname, 'views','user', 'login.ejs');
    res.render(file);
})