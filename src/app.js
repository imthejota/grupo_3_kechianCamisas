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

server.use(require('./middlewares/user'))


// EJS
server.set('views', path.join(__dirname, './views'));
server.set('view engine', 'ejs')

const { todos , devolverN} = require('./models/productsModel.js')

// Ruta index
server.get('/', function(req, res) {
    let products = todos()

    let archivosPrincipales = devolverN(todos(), 0, 4);

    let varFilter = [];
    for (var i = 5; i < products.length ; i++){
        varFilter.push(products[i]);
    };
    return res.render('index', { varFilter , archivosPrincipales });
    });

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

//sequelize probando tablas
//problema en el index significa que tengo un error en algun modelo
const db = require('./database/models');
server.get('/sequelize', function (req,res){
    db.Size.findAll({ include:['products']}) //nombre exportado
        .then((users) => { 
            res.send(users);  //nombre de config-tamblename-
        }).catch((error) =>{
            res.send(error)
        });
});




const rutasUser = require('./routes/usersRoutes.js')
server.use(rutasUser);

const rutasProduct = require('./routes/productsRoutes.js');
const { appendFile } = require('fs'); // -> para qué lo estamos usando?
server.use('/products', rutasProduct);

