const {body} = require("express-validator");
const {compareSync} = require('bcrypt');
const db = require('../database/models/')

let email = body('correo').notEmpty().withMessage('Campo obligatorio').bail().isEmail().withMessage('Email no valido').custom((value,{req}) => {
    return db.User.findAll()
    .then(users => {
        let listOfEmails = users.map(user => user.email)
        console.log(listOfEmails)
        if(listOfEmails.indexOf(value) == -1){
            return Promise.reject ('Usuario no encontrado')
        } else {
            return true
        }
    }).catch(error => {throw new Error(error)})
})

let password = body('contraseña').notEmpty().withMessage('Campo obligatorio').bail().isLength({min:4}).withMessage('Minimo 4 caracteres').custom((value,{req}) => {
    return db.User.findOne({
        where: {email: req.body.correo}
    })
    .then((user) => {
        if(!user){
            return Promise.reject ('Credenciales inválidas')
        }
        if(!compareSync(value,user.password) ){ 
            return Promise.reject ('La contraseña no coincide')
        } else {
            return true
        }
    }).catch((error) => {throw new Error(error)})  
})

let validaciones = [email,password]

module.exports = validaciones;