const {Router} = require('express');
const router = Router(); 
const usersControllers = require('../controllers/api/usersController');

router.get('/users', usersControllers.list)
router.get('/users/:id', usersControllers.detail)


module.exports = router;