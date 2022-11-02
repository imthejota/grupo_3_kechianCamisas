const {body} = require("express-validator");
const db = require('../database/models/')

let firstName = body('firstName').notEmpty().withMessage('Campo obligatorio').bail().isLength({min: 2}).withMessage('Mínimo 2 caracteres')

let lastName = body('lastName').notEmpty().withMessage('Campo obligatorio').bail().isLength({min: 2}).withMessage('Mínimo 2 caracteres')

let location = body('location').notEmpty().withMessage('Campo obligatorio').bail()

let email = body('email').notEmpty().withMessage('Campo obligatorio').bail().isEmail().withMessage('Email no valido')
.custom((value,{req}) => {
    return db.User.findAll()
    .then(users => {
        let listOfEmails = users.map(user => user.email)
        if(listOfEmails.indexOf(value) != -1){
            return Promise.reject ('Usuario ya registrado')
        } else {
            return true
        }
    }).catch(error => {throw new Error(error)})
})

let password = body('password')
.notEmpty().withMessage('Campo obligatorio').bail()
.isLength({min:8}).withMessage('Minimo 8 caracteres')
.custom((value, {req}) => {//Chequea que la contraseña tenga letras mayúsculas, minúsculas, un número y un carácter especial.
    let checkPassword = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\_\*-])");
    if(checkPassword.test(value)){
        return true
    }else{
        return Promise.reject('La contraseña debe contener letras mayúsculas, minúsculas, un número y un carácter especial')
    }
})

let image = body('image')
.custom((value, {req}) => {//chequea que la imagen sea un archivo válido (JPG, JPEG, PNG, GIF).
    let archivo = req.file
    if (archivo === undefined ){
        return true
    }
    else if(archivo.mimetype === 'image/jpg' || archivo.mimetype === 'image/png' || archivo.mimetype === 'image/jpeg' || archivo.mimetype === 'image/gif'){
        return true
    } else {
        return Promise.reject('Tiene que ser una imagen')
    }    
}) 


let condiciones = body('condiciones').notEmpty().withMessage('Campo obligatorio').bail()


let validaciones = [firstName, lastName, location, email, password, image, condiciones]
module.exports = validaciones