const {Router} = require('express');
const router = Router(); 
/* const productsControllers = require('../controllers/productsController.js'); */
const productsControllers = require('../controllers/productsControllerBBDD');
const path = require('path');
const {existsSync, mkdirSync} = require('fs')

// Carpeta donde se guarda el archivo
const destination = (req, file, cb) => {
    let folder = path.resolve(__dirname, '..','..', 'public', 'products')
    if (!existsSync(folder)){
        mkdirSync(folder)
    }
    return cb(null, folder)
}
// Nombre del archivo que va a ser guardado
const filename = (req, file, cb) => {
    let unique = Date.now() + '-' + Math.round(Math.random() * 1E9)
    // fieldname = name del input / extname extrae la extensión del archivo original
    let name = file.fieldname + '-' + unique + path.extname(file.originalname) ;
    return cb(null, name)
}

// Requiero multer
const multer = require('multer');
// Al multer le paso un objeto que tiene el multer.diskStorage y dentro del mismo paso otro objeto con las 2 constantes creadas antes
const upload = multer({storage: multer.diskStorage({destination, filename})})

const isLogged = require('../middlewares/isLogged')
const isAdmin = require ('../middlewares/isAdmin');
const productsController = require('../controllers/productsControllerBBDD');

//middleware que solo permite acceder a ciertas funcionalidades si estoy logeado
router.get('/list', productsControllers.index) // 3
router.get('/crear', isLogged, isAdmin, productsControllers.create)  // 1
router.get('/editar/:id', isLogged,  productsControllers.edit); // 4
router.get('/detail/:id', productsControllers.detail); // 5
router.get('/cart', productsControllers.productCart); // ?
router.post('/guardar', upload.any(), productsControllers.save) // 2
router.put('/actualizar/:id', upload.any(), productsControllers.update); // 6
router.delete('/delete/:id', isLogged , productsControllers.delete); // 8

module.exports = router;