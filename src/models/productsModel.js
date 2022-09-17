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
        producto.id = !ultimo? 1 : ultimo.id + 1;
        producto.name = data.name;
        producto.description = data.description;
        producto.category = data.category;
        producto.image = data.image;
        producto.size = data.size;
        producto.price = parseInt(data.price);
        producto.discount = parseInt(data.discount);
        
        
        return producto;
    },
    escribir: (data) => {
        let file = path.join(__dirname, '../data/products.json');
        let json = JSON.stringify(data, null, " ");
        return fs.writeFileSync(file, json);
    },
    devolverN: (array, numInicial, numFinal) => {
        let arrayDevuelve = [];
        for (var i = numInicial ; i < numFinal; i++){
            arrayDevuelve.push(array[i]);
        };
        return arrayDevuelve;
    }
}


module.exports = model;


