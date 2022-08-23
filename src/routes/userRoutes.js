const {Router} = require('express');
const router = Router(); 
const userControllers = require('../controllers/userController.js');
//const path = require('path');
//const {existsSync, mkdirSync} = require('fs')


// Ruta register
router.get('/register', userControllers.register)


// Ruta login
router.get('/login', userControllers.login)

module.exports = router;