const {  uno, generar, escribir, todos } = require('../models/products.models')
const {unlinkSync} = require('fs'); // para método remove
const path = require('path');

const productsControllers = {
    index: (req, res) => {
        let products = todos()
        if (req.params.category) {
            products = products.filter(e => e.category == req.params.category)
            return res.render('product/list', { products })
        }
        return res.render('product/list', { products })
    },
    
    
    create: (req, res) => {
        return res.render ('product/crear')
    },
    save: (req, res) => {
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
    detail: (req, res) => {
        let product = uno(req.params.producto);
        res.render('product/productDetail', { product });
    },
    edit: (req, res) => {
        let product = uno(req.params.producto)
        res.render('product/edit',{ product });
    },
    update: (req,res) => {
        let all = todos();
        let actualizado = all.map(elemento => {
            if(elemento.id == req.body.id){
                elemento.name = req.body.name;
                elemento.price = parseInt(req.body.price);
                elemento.category = req.body.category;
                elemento.size = req.body.size;
                elemento.image = req.files && req.files.length > 0 ? req.files[0].filename : elemento.image;
            }
            
            return elemento
        })
        escribir(actualizado);
        return res.send('Lo cambia');
    },
    productCart: (req, res) => {
        res.render('product/productCart');
    },
    delete: (req, res) => {
        let all = todos();
        let filtrar = all.filter(function(elemento){
            return elemento.id != req.params.id;
        });
        escribir(filtrar);
        res.redirect('/products');
    }  
}






module.exports = productsControllers;