const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const start = () => console.log('Starting server in http://localhost:2020');


//Agregando override
const methodOverride = require('method-override');

const rutasProduct = require('./routes/productsRoutes.js');
const { appendFile } = require('fs');

server.listen(port, start());


// Middlewares
server.use(statics);
server.use('/products', rutasProduct);

server.use(methodOverride("_method"));


// EJS
server.set('views', path.join(__dirname, './views'));
server.set('views', path.join(__dirname, './views/product')); /* si esta linea desaparece 
deberia agregarse en las rutas de los controladores */
server.set('view engine', 'ejs')




server.get('/', function(req, res) {
    res.render('index');
})


server.get('/register', function(req, res) {
    res.render('user/register');
})

/* server.post('/register', function(req, res) {
    res.redirect("/home")
}) */

server.get('/login', function(req, res) {
    res.render('user/login');
})

const productoRoutes = require('./routes/productsRoutes');
server.use(productoRoutes);