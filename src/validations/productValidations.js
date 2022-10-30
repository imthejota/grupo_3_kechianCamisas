/* (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base. */ 

const {body} = require("express-validator");
/* const db = require('../database/models/') */
const path = require('path')


let nombre = body('name').notEmpty().bail().isLength({min: 5})
let descripcion = body('description').notEmpty().bail().isLength({min: 20})
let imagen = body('image').custom((value, {req}) => {
    let archivo = req.files[0]
    if(archivo.mimetype === 'image/jpg' || archivo.mimetype === 'image/png' || archivo.mimetype === 'image/jpeg' || archivo.mimetype === 'image/gif'){
        return true
    } else {
        return Promise.reject('Formato inválido')
    }    
}) 

let validaciones = [nombre, descripcion, imagen]
module.exports = validaciones