const {Router} = require('express');
const router = Router(); 
const userControllers = require('../controllers/usersController.js');
const userControllersBBDD = require('../controllers/usersControllerBBDD.js')
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
//agrrgando ruta de validacion
const validatorLogin = require('../validations/login')


router.get('/user/:id', userControllersBBDD.profile)
// Ruta register
router.get('/register', userControllersBBDD.register)
// Ruta login
router.get('/login', userControllersBBDD.login)
//agregando ruta logout
router.get('/register', userControllersBBDD.register)

// Ruta logout
router.post('/logout', userControllersBBDD.logout)
router.post('/saveUser', fileUpload.single('image'), userControllersBBDD.save)
router.post('/access', validatorLogin, userControllersBBDD.access)

module.exports = router;