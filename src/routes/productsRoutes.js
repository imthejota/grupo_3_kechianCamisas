const {Router} = require('express');
const productsControllers = require('../controllers/productsController.js');

const router = Router();


router.get('/detail', productsControllers.detail);

router.get('/crear', productsControllers.crear)

router.get('/modificar', productsControllers.modificar)

router.get('/productCart', productsControllers.productCart)

module.exports = router;

/* route.get('/productos/crear');
route.post('/productos/guardar');
route.get('/productos/detalle');
route.put('/productos/editar/:id')
 */

