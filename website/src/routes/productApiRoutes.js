const {Router} = require('express');
const router = Router(); 
const productsControllers = require('../controllers/api/productsController');

router.get('/products', productsControllers.list)
router.get('/products/:id', productsControllers.detail)


module.exports = router;

