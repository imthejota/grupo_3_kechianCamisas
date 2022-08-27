const path = require('path');
const fs = require('fs');

let model = {
    todos: () => {
        let file = path.resolve(__dirname, '../data', 'products.json')
        let data = fs.readFileSync(file);
        return JSON.parse(data);
    },
    uno: (id) => {
        let all = model.todos();
        return all.find(e => e.id == id);
    },
    generar: (data) => {
        let all = model.todos();
        let ultimo = all.pop();
        let producto = {};
        producto.name = data.name;
        producto.price = parseInt(data.price);
        producto.discount = parseInt(data.discount);
        producto.category = data.category;
        producto.description = data.description;
        producto.size = data.size;
        producto.id = !ultimo? 1 : ultimo.id + 1;
        producto.image = data.image;
        return producto;
    },
    escribir: (data) => {
        let file = path.join(__dirname, '../data/products.json');
        let json = JSON.stringify(data, null, " ");
        return fs.writeFileSync(file, json);
    }
}


module.exports = model;


