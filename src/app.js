const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const start = () => console.log('Starting server in http://localhost:2020');

const rutasProduct = require('./routes/productsRoutes.js');

// Primero listen, luego set, luego use
server.listen(port, start());

// EJS
server.set('views', __dirname, './views');
server.set('view engine', 'ejs')

// Middlewares
server.use(statics);
server.use('/products', rutasProduct);






server.get('/', function(req, res) {
    let file = path.join(__dirname, 'views', 'index.ejs');
    return res.render(file);
})


server.get('/register', function(req, res) {
    let file = path.join(__dirname, 'views', 'user', 'register.ejs');
    return res.render(file);
})

/* server.post('/register', function(req, res) {
    res.redirect("/home")
}) */

server.get('/login', function(req, res) {
    let file = path.join(__dirname, 'views', 'user', 'login.ejs');
    return  res.render(file);
})