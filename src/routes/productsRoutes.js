const {Router} = require('express');
const productsControllers = require('../controllers/productsController.js');

const router = Router(); 


router.get('/crear', productsControllers.create) /*Mateo: armado de ruta create*/ 

router.post ('/guardar', productsControllers.save) /*Mateo: armado de ruta a save*/ 

router.get('/detail', productsControllers.detail);

router.get('/cart', productsControllers.productCart)

router.get('/editar/:producto', productsControllers.edit)

router.put('/actualizar', productsControllers.update)



module.exports = router;



