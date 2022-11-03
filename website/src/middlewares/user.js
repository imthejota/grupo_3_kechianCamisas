/* const {todos} = require('../models/usersModel'); */
const db = require('../database/models')


let middleware = async (req,res,next) => {

    let user = null 

    //caso 1 existe una cookie de usuario
    if(req.cookies && req.cookies.user){
        let users = await db.User.findAll()
        let result = users.find(user => user.email == req.cookies.user)
        req.session.user = result
    }

        //caso 2 existe un usuario en sesion 
    if(req.session && req.session.user){
        user = req.session.user
    }
    res.locals.user = user 

    return next()
}

module.exports = middleware