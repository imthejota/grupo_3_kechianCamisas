const {Router} = require('express');
const router = Router(); 
const userControllersBBDD = require('../controllers/usersControllerBBDD.js')
const path = require('path');
const multer = require('multer');
const isLogged = require('../middlewares/isLogged')
/* const isAdmin = require ('../middlewares/isAdmin') */
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
const validatorLogin = require('../validations/loginValidations')
const createUserValidations = require('../validations/createUserValidations')
const isUser = require("../middlewares/isUser")

router.get('/user/:id', isUser ,userControllersBBDD.profile)
router.get('/register', userControllersBBDD.register)
router.get('/login', userControllersBBDD.login)
router.get('/register', userControllersBBDD.register)
router.get('/user/update/:id', isUser ,userControllersBBDD.edit)
router.post('/logout', userControllersBBDD.logout)
router.post('/saveUser', fileUpload.single('image'), createUserValidations, userControllersBBDD.save)
router.post('/access', validatorLogin, userControllersBBDD.access)
router.put('/user/update/:id', fileUpload.any(), isUser ,userControllersBBDD.update)
router.delete('/user/delete/:id', userControllersBBDD.destroy)


module.exports = router;