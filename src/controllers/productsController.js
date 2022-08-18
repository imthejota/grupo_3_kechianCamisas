const { todos, uno, generar, escribir } = require('../models/products.models')
const {unlinkSync, write} = require('fs'); // para método remove
const {resolve} = require('path'); // para método remove


const path = require('path');

const productsControllers = {
    //'crear': (req, res) => {
    //    res.render('crear');
    //},
    
    'detail': (req, res) => {
        res.render('product/productDetail');
    },
    'edit': (req, res) => {
        let product = uno(req.params.producto)
        res.render('edit',{
            product
        });
    },

    'update': (req,res) => {
        let todos = todos();
        let actualizados = todos.map(elemento => {
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

    /*Mateo:"creo el formulario de create Y el de save"*/ 
    'create': (req, res) => {
        return res.render ('product/crear')
    },

    "save": (req, res) => {
        let datosDelForm = req.body
        let nuevo = generar (datosDelForm) /*guardar la varibale*/
        let todos = all()
        todos.push(nuevo)
        escribir (todos) 
        return res.redirect ("/product")
    },
    
}






module.exports = productsControllers;