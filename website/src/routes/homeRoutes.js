const {Router} = require('express');
const router = Router(); 
const homeController = require('../controllers/homeControllerBBDD');


router.get('/', homeController.home)

module.exports = router;