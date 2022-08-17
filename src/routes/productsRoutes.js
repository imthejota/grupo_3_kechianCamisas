const {Router} = require('express');
const productsControllers = require('../controllers/productsController.js');

const router = Router();


router.get('/detail', productsControllers.detail);

router.get('/crear', productsControllers.crear)

router.get('/modificar', productsControllers.modificar)

router.get('/cart', productsControllers.productCart)

module.exports = router;



