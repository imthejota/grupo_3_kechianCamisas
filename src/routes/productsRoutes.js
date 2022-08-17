const {Router} = require('express');
const productsControllers = require('../controllers/productsController.js');

const router = Router();


router.get('/detail', productsControllers.detail);

router.get('/crear', productsControllers.crear)

router.get('/cart', productsControllers.productCart)

router.get('/editar/:producto', productsControllers.edit)

router.put('actualizar', productsControllers.update)



module.exports = router;



