const {Router} = require('express');
const router = Router(); 
const productsControllers = require('../controllers/productsController.js');
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


router.get('/list', productsControllers.index)

router.get('/crear', productsControllers.create) /*Mateo: armado de ruta create*/ 

router.post('/guardar', upload.any(), productsControllers.save) /*Mateo: armado de ruta a save*/ 

router.get('/editar/:producto', productsControllers.edit);
router.put('/actualizar', upload.any(), productsControllers.update);

router.get('/detail/:producto', productsControllers.detail);

router.get('/cart', productsControllers.productCart);

router.delete('/delete/:id', productsControllers.delete);







module.exports = router;



