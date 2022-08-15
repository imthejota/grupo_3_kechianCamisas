//const { todos, uno, generar, escribir } = require('../models/products.models')
//const {unlinkSync} = require('fs');
//const {resolve} = require('path');


const path = require('path');

const productsControllers = {
    crear: function(req, res) {
        let file = ('views/product/crear.ejs');
        res.render(file);
    },
    detail: function(req, res) {
        let file = ('views/product/productDetail.ejs');
        res.render(file);
    },
    modificar: function(req, res) {
        let file = ('views/product/modificar.ejs');
        res.render(file);
    },
    productCart: function(req, res) {
        let file = ('views/product/productCart.ejs');
        res.render(file);
    },
}






module.exports = productsControllers;