const {todos} = require('../models/usersModel');


let middleware = (req,res,next) => {
    let user = null 
    //caso 1 existe una cookie de usuario
    if(req.cookies && req.cookies.user){
        let users = todos()
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