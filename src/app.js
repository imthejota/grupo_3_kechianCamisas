const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const start = () => console.log('Starting server in http://localhost:2020');



//Agregando override
const methodOverride = require('method-override');

server.listen(port, start());


// Middlewares
server.use(statics);
server.use (express.urlencoded({extended:true}));
server.use(methodOverride("m"));


const rutasProduct = require('./routes/productsRoutes.js');
server.use('/products', rutasProduct);


// EJS
server.set('views', path.join(__dirname, './views'));
server.set('view engine', 'ejs')



// Ruta index
server.get('/', function(req, res) {
    res.render('index');
})

// Ruta register
server.get('/register', function(req, res) {
    res.render('user/register');
})



// Ruta login
server.get('/login', function(req, res) {
    res.render('user/login');
})




