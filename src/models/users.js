const path = require('path');
const fs = require('fs');

let model = {
    todos: () => {/*no recibe parametros y tiene que traer el listado de todos los usuarios*/
        let file = path.join(__dirname,"../data/usuarios.json")
        let line = fs.readFileSync(file)
        return 
        
        
    },
    uno: (id) => { /*Recibe un id por parametro y tiene que buscar en "todos (el metodo)" el producto que tenga dicho "ID" */
        
    },
    generar: (data) => { /*Recibe por parametro un formulario (req.body), lo que viene. Tiene que convertir el formulario al objeto que tengo en la base de datos  */
        
    },
    escribir: (data) => { /*recibe un array de usuarios y sobre escribe la base de datos actual*/
        
    }
}


module.exports = model;
