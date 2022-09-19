const {todos} = require('../models/usersModel');


let middleware = (req,res,next) => {
<<<<<<< HEAD

    let user = null 

=======
    let user = null 
>>>>>>> cb2d24ab89fd05df5bb5ae27e3521ceba9f6f758
    //caso 1 existe una cookie de usuario
    if(req.cookies && req.cookies.user){
        let users = todos()
        let result = users.find(user => user.email == req.cookies.user)
        req.session.user = result
    }
<<<<<<< HEAD


    //caso 2 existe un usuario en sesion 
    if(req.session && req.session.user){
        user = req.session.user
    }



    res.locals.user = user

=======
        //caso 2 existe un usuario en sesion 
    if(req.session && req.session.user){
        user = req.session.user
    }
    res.locals.user = user
>>>>>>> cb2d24ab89fd05df5bb5ae27e3521ceba9f6f758
    return next()
}

module.exports = middleware