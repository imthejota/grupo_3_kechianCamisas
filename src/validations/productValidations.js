/* ○ Nombre
■ Obligatorio. OK
■ Deberá tener al menos 5 caracteres. OK
○ Descripción
■ Deberá tener al menos 20 caracteres. OK
○ Imagen
■ Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).
○ (Opcional) Tablas secundarias
■ Verificar que los valores existan en base. Es decir, que los valores
de talles, colores, etc. que lleguen sean válidos en la base. */

const {body} = require("express-validator");
const db = require('../database/models/')

let nombre = body('name').notEmpty().withMessage('Campo obligatorio').bail().isLength({min: 5}).withMessage('Mínimo 5 caracteres')
let descripcion = body('description').notEmpty().withMessage('Campo obligatorio').bail().isLength({min: 20}).withMessage('Mínimo 20 caracteres')
let imagen = body('image').notEmpty().withMessage('Debes agregar una imagen').bail().custom((value,{req}) => {}    
/* let talle =
let categoria = */ 