let express = require('express');
const productsControllers = require('../controllers/productsController.js');

let router = express.Router();


router.get('/productDetail', productsControllers.detail);

router.get('/crear', productsControllers.crear)

router.get('/modificar', productsControllers.modificar)

router.get('/productCart', productsControllers.productCart)

module.exports = router;

