//const { todos, uno, generar, escribir } = require('../models/products.models')
//const {unlinkSync} = require('fs');
//const {resolve} = require('path');


const path = require('path');

const productsControllers = {
    'crear': (req, res) => {
        let file = ('product/crear');
        res.render(file);
    },
    'detail': (req, res) => {
        let file = ('product/productDetail');
        res.render(file);
    },
    'modificar': (req, res) => {
        let file = ('product/modificar');
        res.render(file);
    },
    'productCart': (req, res) => {
        let file = ('product/productCart');
        res.render(file);
    },
}






module.exports = productsControllers;