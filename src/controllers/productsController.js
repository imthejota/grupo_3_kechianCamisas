//const { todos, uno, generar, escribir } = require('../models/products.models')
//const {unlinkSync} = require('fs');
//const {resolve} = require('path');


const path = require('path');

const productsControllers = {
    'crear': (req, res) => {
        res.render('product/crear');
    },
    'detail': (req, res) => {
        res.render('product/productDetail');
    },
    'modificar': (req, res) => {
        res.render('product/modificar');
    },
    'productCart': (req, res) => {
        res.render('product/productCart');
    },
}






module.exports = productsControllers;