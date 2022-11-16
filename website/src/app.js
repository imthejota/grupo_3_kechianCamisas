const express = require('express');
const server = express();
const port = process.env.PORT || 2020;
const path = require('path');
const public = path.join(__dirname, '../public');
const statics = express.static(public);
const cors = require('cors')
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
server.use(cors())

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

//sequelize probando tablas
//problema en el index significa que tengo un error en algun modelo
const db = require('./database/models')
server.get('/sequelize', function (req,res){
    db.Product.findAll() //nombre exportado
        .then((users) => { 
            res.send(users);  //nombre de config-tamblename-
        }).catch((error) =>{
            res.send(error)
        });
});

const rutaHome = require('./routes/homeRoutes.js')
server.use(rutaHome);

const rutasUser = require('./routes/usersRoutes.js')
server.use(rutasUser);

const rutasProduct = require('./routes/productsRoutes.js');
server.use('/products', rutasProduct);

const rutasProductApi = require('./routes/productApiRoutes')
server.use('/api', rutasProductApi)

const rutasUserApi = require('./routes/userApiRoutes')
server.use('/api', rutasUserApi)

// ! middleware para manejar errores en caso de no cargar una vista no existente
const errorHandler = require('./middlewares/errorHandler')
server.use(errorHandler)