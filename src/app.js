const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const start = () => console.log('Starting server in http://localhost:2020');


//Agregando session
const session = require('express-session')
server.use(session({secret: "Secreto"}));


//Agregando override
const methodOverride = require('method-override');

server.listen(port, start());


// Middlewares
server.use(statics);
server.use (express.urlencoded({extended:true}));
server.use(methodOverride("m"));


// EJS
server.set('views', path.join(__dirname, './views'));
server.set('view engine', 'ejs')



// Ruta index
const { todos } = require('./models/products.models')
server.get('/', function(req, res) {
    let products = todos()
        if (req.params.category) {
            products = products.filter(e => e.category == req.params.category)
            return res.render('index', { products })
        }
        return res.render('index', { products })
    })

const rutasUser = require('./routes/userRoutes.js')
server.use('/user', rutasUser);

const rutasProduct = require('./routes/productsRoutes.js');
const { appendFile } = require('fs');
server.use('/products', rutasProduct);


