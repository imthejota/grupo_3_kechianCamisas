const {Router} = require('express');
const router = Router(); 
const userControllers = require('../controllers/usersController.js');
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

// Ruta register
router.get('/register', userControllers.register)

router.post('/saveUser', fileUpload.single('image'), userControllers.save)

// Ruta login
router.get('/login', userControllers.login)

router.post('/access', validatorLogin, userControllers.access)

module.exports = router;



