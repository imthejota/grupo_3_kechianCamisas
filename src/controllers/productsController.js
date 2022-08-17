const { todos, uno, generar, escribir } = require('../models/products.models')
const {unlinkSync, write} = require('fs'); // para método remove
const {resolve} = require('path'); // para método remove


const path = require('path');

const productsControllers = {
    //'crear': (req, res) => {
    //    res.render('crear');
    //},
    
    'detail': (req, res) => {
        res.render('productDetail');
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
        res.render('productCart');
    },

    /*Mateo:"creo el formulario de resgistro"*/ 
    "create": (req, res) => {
        return res.render ("product/crear")
    },

    "save": (req, res) => {
      
        let store = generar (req.body) /*guardar la varibale*/ 
        write(todos)
        return res.redirect('/productos/');

        /*usar el metodo. escrbir como guardarlo en la base de datos*/
        
    },
    
}






module.exports = productsControllers;