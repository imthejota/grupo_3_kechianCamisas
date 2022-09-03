const {Router} = require('express');
const router = Router(); 
const userControllers = require('../controllers/userController.js');
const path = require('path');
const multer = require('multer');
//const {existsSync, mkdirSync} = require('fs')

const multerDiskStorage = multer.diskStorage({
    destination: (req, file, cb) =>
{   let folder = path.join(__dirname, '..','..', 'public', 'users');
    cb(null, folder);
},
    filename: (req, file, cb) =>
{   let imageName = 'user-' + Date.now() + path.extname(file.originalname);
    cb(null, imageName);
}
})

const fileUpload = multer({storage: multerDiskStorage});

// Ruta register
router.get('/register', userControllers.register)

router.post ('/save', fileUpload.single('image'), userControllers.save)

// Ruta login
router.get('/login', userControllers.login)

module.exports = router;




/*
"Lo tengo que revisar mañana porque esta mal"

const {Router} = require('express');
const router = Router(); 
const userControllers = require('../controllers/userController.js');
//const path = require('path');
//const {existsSync, mkdirSync} = require('fs')



//agregando ruta de middelware
let guestMiddelware = require('../middelwares/guestMiddelware');




// Ruta register
router.get('/register', [guestMiddelware]  userControllers.register)


// Ruta login
router.get('/login', userControllers.login)

router.post('/login', [
    check('email').isEmail().whithMessage('Email invalido'),
    check('password').isLength({min: 8}).whithMessage('La contraseña debe tener al menos 9 caracteres')
], userControllers.processLogin);

router.get('/check', function(req,res){
    if (req.session.usuarioLogueado == undefined) {
        res.send("No estas logueado");
    } else {
        res.send("El usuario logueado es " + req.session.usuarioLogueado.email);
    }
})

module.exports = router;

*/