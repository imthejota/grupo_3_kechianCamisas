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
    resave: "resave",
    saveUninitialized: "saveUninitialized"
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
        if (req.params.category) {
            products = products.filter(e => e.category == req.params.category)
            return res.render('index', { products })
        }
        return res.render('index', { products })
    })

const rutasUser = require('./routes/usersRoutes.js')
server.use(rutasUser);

const rutasProduct = require('./routes/productsRoutes.js');
const { appendFile } = require('fs');
server.use('/products', rutasProduct);


