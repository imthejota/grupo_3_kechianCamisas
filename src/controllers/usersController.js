const { validationResult } = require("express-validator");
const {  uno, generar, escribir, todos }  = require ("../models/usersModel.js");

const userControllers = {
    register: function(req, res) {
        res.render('user/register');
    },

    save: function(req, res) {
        if(req.file){ //Pregunto si el file existe o no
            req.body.image = req.file.filename; //Dentro de la propiedad image guardo el nombre de la imagen que envio la persona 
        } else {
            req.body.image = 'default.png';
        }
        let nuevo = generar(req.body); //Genero el usuario como en la base de datos, solo con una funcion (un metodo del modelo) y le paso el parametro el req.body (que viene del formulario)
        let all = todos(); //Traigo todos los usuarios actuales 
        all.push(nuevo); //Hago push de mi nuevo usuario a la lista de usuarios actuales 
        escribir(all); //Escribo el array en la base de datos, solo con una funcion (solo un metodo del modelo) y le paso por parametro (el listado actualizado de usuarios)
        return res.redirect ('/');
    },

    login: function(req, res) {
        res.render('user/login');
    },
    access : (req,res) => {
        //control de validaciones
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render('user/login',{
                style:'login',
                errores: errores,
                data: req.body
            })
        }

        req.cookie('user', req.body.email,{maxAge: 3000})
        let all = todos();
        req.session.user = all.find(user => user.email == req.body.email)

        return res.redirect('/')
    }
}

module.exports = userControllers;