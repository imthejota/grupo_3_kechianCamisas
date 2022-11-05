const {Router} = require('express');
const router = Router(); 
const productsControllers = require('../controllers/api/productsController');

router.get('/list', productsControllers.list)


module.exports = router;