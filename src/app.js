const express = require('express');
const server = express();
const port = 0.0 .0 .0: $PORT;
const start = () => console.log('Starting server');
server.listen(port, start());

const path = require('path');
const public = path.join(__dirname, '../public');

const statics = express.static(public);

server.use(statics);


server.get('/', function(req, res) {
    let file = path.join(__dirname, 'views', 'index.html');
    res.sendFile(file);
})

server.get('/productDetail', function(req, res) {
    let file = path.join(__dirname, 'views', 'productDetail.html');
    res.sendFile(file);
})

server.get('/productCart', function(req, res) {
    let file = path.join(__dirname, 'views', 'productCart.html');
    res.sendFile(file);
})

server.get('/register', function(req, res) {
    let file = path.join(__dirname, 'views', 'register.html');
    res.sendFile(file);
})

/* server.post('/register', function(req, res) {
    res.redirect("/home")
}) */

server.get('/login', function(req, res) {
    let file = path.join(__dirname, 'views', 'login.html');
    res.sendFile(file);
})