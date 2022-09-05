const {body} = require("express-validator");
const {todos} = require('../models/usersModel')
const {compareSync} = require('bcrypt');


let email = body('email').notEmpty().withMessage('Email no puede quedar vacio').bail().isEmail().withMessage('Email no valido').custom((value,{req}) => {
    let users = todos()
    let listOfEmails = users.map(user => user.email)
    if(listOfEmails.indexOf(value) == -1){
        throw new Error('Usuario no encontrado')
    }
    return true
})

let password = body('password').notEmpty().withMessage('Contraseña no valida').bail().isLength({min:4}).withMessage('Minimo 4 caracteres').custom((value,{req}) => {
    let users = todos()
    let result = users.find(user => user.email == req.body.email)

    if(!result){
        throw new Error('Credenciales invalidas')
    }

    if(!compareSync(value,result.password) ){
        throw new Error('La contraseña no coincide')
    }

    return true
})

let validaciones = [email,password]

module.exports = validaciones;