const { todos, uno, generar, escribir } = require('../models/products.models')
const {unlinkSync} = require('fs'); // para método remove
const {resolve} = require('path'); // para método remove


const path = require('path');

const productsControllers = {
    'crear': (req, res) => {
        res.render('crear');
    },
    'detail': (req, res) => {
        res.render('productDetail');
    },
    'modificar': (req, res) => {
        res.render('modificar');
    },
    'productCart': (req, res) => {
        res.render('productCart');
    },
}






module.exports = productsControllers;