const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const start = () => console.log('Starting server in http://localhost:2020');

server.listen(port, start());
server.set('views', __dirname, './views');
server.set('view engine', 'ejs')
server.use(statics);


server.get('/', function(req, res) {
    let file = path.join(__dirname, 'views', 'index.ejs');
    res.render(file);
})

server.get('/productDetail', function(req, res) {
    let file = path.join(__dirname, 'views', 'product', 'productDetail.ejs');
    res.render(file);
})
server.get('/crear', function(req, res) {
    let file = path.join(__dirname, 'views', 'product', 'crear.ejs');
    res.render(file);
})

server.get('/modificar', function(req, res) {
    let file = path.join(__dirname, 'views', 'product', 'modificar.ejs');
    res.render(file);
})

server.get('/productCart', function(req, res) {
    let file = path.join(__dirname, 'views', 'product', 'productCart.ejs');
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
    let file = path.join(__dirname, 'views', 'user', 'login.ejs');
    res.render(file);
})