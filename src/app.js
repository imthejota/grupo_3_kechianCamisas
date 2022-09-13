const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const start = () => console.log('Starting server in http://localhost:2020');

//Agregando express-validator
const expressValidator = require('express-validator');


//Agregando session
const session = require('express-session');
const cookie = require('cookie-parser');



//Agregando override
const methodOverride = require('method-override');

server.listen(port, start());


// Middlewares
server.use(statics);

server.use (express.urlencoded({extended:true}));

server.use(methodOverride("m"));

server.use(session({
    secret: "Secreto",
    resave: true,
    saveUninitialized: true
}));// Agrega al request la propiedad session

server.use(cookie())
 // Agrega al request la propiedad response (lee una cookie)
// Agrega al response el method cookie (agrega un cookie que el req. pueda leer )

server.use(require('./middelwares/user'))


// EJS
server.set('views', path.join(__dirname, './views'));
server.set('view engine', 'ejs')



// Ruta index
const { todos } = require('./models/productsModel.js')

server.get('/', function(req, res) {
    let products = todos()

    let archivosPrincipales = [];
    for (var i = 0; i < 4; i++){
        archivosPrincipales.push(products[i]);
    };


    let varFilter = [];
    for (var i = 3; i < products.length ; i++){
        varFilter.push(products[i]);
    };

        return res.render('index', { varFilter , archivosPrincipales })
    })

//Ruta index filtro lisos
server.get('/lisos', function (req,res){
    let products = todos();
    let varFilter = products.filter(product => product.category == "lisa");

    return res.render('index', { varFilter })
});

//Ruta index filtro estampados
server.get('/estampados', function (req,res){
    let products = todos();
    let varFilter = products.filter(product => product.category == "estampada");

    return res.render('index', { varFilter })
});

//Ruta index filtro estampados


const rutasUser = require('./routes/usersRoutes.js')
server.use(rutasUser);

const rutasProduct = require('./routes/productsRoutes.js');
const { appendFile } = require('fs');
server.use('/products', rutasProduct);


