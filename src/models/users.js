const path = require('path');
const fs = require('fs');

let model = {
    todos: () => {
        let file = path.join(__dirname,"../data/usuarios.json")
        let data = fs.readFileSync(file)
        return JSON.parse (data)
        
        
    },
    uno: (id) => { 
        let todos = model.todos();
        return todos.find (e => e.id == id)
    },
    generar: (data) => { 
         let nuevo = {}
        nuevo.id = model.todos().length > 0 ? model.todos().pop().id ++ : 1    
        nuevo.email = data.correoe   
        nuevo.firstName = data.nombre
        nuevo.lastName = data.apellido
        nuevo.contraseña = data.contra
        nuevo.category = "cliente"
        //nuevo.dni = parseInt(data.dni)
       return nuevo
    },
    escribir: (listadoNuevo) => { 
        let nuevoJson = JSON.stringify(listadoNuevo, null, 2)
        return fs.writeFileSync(path.join(__dirname,"../data/usuarios.json"), nuevoJson)
    }
}


module.exports = model;
