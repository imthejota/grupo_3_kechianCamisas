const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs'); 

let model = {
    todos: () => {
        let file = path.join(__dirname,"../data/users.json");
        let data = fs.readFileSync(file);
        return JSON.parse (data);  
    },
    uno: (id) => { 
        let todos = model.todos();
        return todos.find (e => e.id == id);
    },
    generar: (data) => { 
        let nuevo = {}
        nuevo.id = model.todos().length > 0 ? model.todos().pop().id + 1 : 1;    
        nuevo.firstName = data.firstName;
        nuevo.lastName = data.lastName;
        nuevo.location = data.location;
        nuevo.email = data.email;
        nuevo.password = bcrypt.hashSync(data.password, 10);
        nuevo.image = data.image;
        nuevo.category = "cliente";
       return nuevo;
    },
    escribir: (listadoNuevo) => { 
        let nuevoJson = JSON.stringify(listadoNuevo, null, 2);
        return fs.writeFileSync(path.join(__dirname,"../data/users.json"), nuevoJson);
    }
}


module.exports = model;
