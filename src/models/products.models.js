const path = require('path');
const fs = require('fs');

let model = {
    todos: () => {
        let file = path.join(__dirname, '../data/products.json');
        let data = fs.readFileSync(file);
        return JSON.parse(data);
    },
    uno: (id) => {
        let todos = model.todos();
        return todos.find(e => e.id == id);
    },
    generar: (data) => {
        let todos = model.todos();
        let ultimo = todos.pop();
        let producto = {};
        producto.name = data.name;
        producto.price = data.price;
        producto.category = data.category;
        producto.id = !ultimo? 1 : ultimo.id + 1;
        /* producto.image = data.image; */
        return producto;
    },
    escribir: (data) => {
        let file = resolve(__dirname, '../data', 'products.json');
        let json = JSON.stringify(data, null, " ");
        return fs.writeFileSync(file, json);
    }
}


module.exports = model;


