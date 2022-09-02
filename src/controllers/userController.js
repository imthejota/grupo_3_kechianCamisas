const modelo = require ("../models/users.js")  

const userControllers = {
    register: function(req, res) {
        res.render('user/register');
    },

    login: function(req, res) {
        res.render('user/login');
    },
    guardarUsuario: function(req, res) {
        /*GENERAR el usuario como en la base de datos, solo con una funcion (un metodo del modelo) y le paso el parametro el req.body (que viene del formulario)*/ 
        

        /*traigo a todos los usuarios actuales*/
        
        
        /*hago push de mi nuevo usuario a la lista de usuarios actuales*/
        
        
        /*ESCRIBIR el array en la base de datos, solo con una funcion (solo un metodo del modelo) y le paso por parametro (el listado actualizado de usuarios)*/

      return res.redirect ("/")
    }


}
/*
let nuevo = generar(req.body);
let all = todos();
all.push(nuevo);
escribir(all);
 cada una de las lineas es uno de los pasos a seguir. */
module.exports = userControllers;