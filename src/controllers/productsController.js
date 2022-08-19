const {  uno, generar, escribir, todos } = require('../models/products.models')
const {unlinkSync, write} = require('fs'); // para método remove
const path = require('path');

const productsControllers = {
    /*Mateo:"creo el formulario de create Y el de save"*/ 
    'create': (req, res) => {
        return res.render ('product/crear')
    },
    'save': (req, res) => {
        if (req.files && req.files.length > 0){
            req.body.image = req.files[0].filename
        } else {
            req.body.image = 'default.png'
        };
        let nuevo = generar(req.body);
        let all = todos();
        all.push(nuevo);
        escribir(all);
        return res.redirect ('/'); // habría que modificar el redirect
        
    },
    'detail': (req, res) => {
        res.render('product/productDetail');
    },
    'edit': (req, res) => {
        let product = uno(req.params.producto)
        res.render('product/edit',{ product });
    },
    'update': (req,res) => {
        let all = todos();
        let actualizados = all.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.name = req.body.name;
                elemento.price = parseInt(req.body.price);
                elemento.category = req.body.category;
                elemento.size = req.body.size;
                elemento.image = req.body.image;
            }
            return elemento
        })
        return res.send('Actualizando')
    },
    'productCart': (req, res) => {
        res.render('product/productCart');
    },
}






module.exports = productsControllers;