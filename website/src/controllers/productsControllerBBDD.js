let db = require('../database/models')
const { validationResult } = require("express-validator");
const fs = require('fs')    
const path = require('path')
const { Op } = require("sequelize"); 

let productsController = {
    index: (req, res) => {
        let search = req.query && req.query.search ? req.query.search : "" 
        db.Product.findAll({
            include: [{association: 'sizes'}],
            where:{
                name: {
                    [Op.like]: "%" + search + "%"
                }
            } 
        })
        .then(function(products){ 
            return res.render('product/list', { products, search})
        })
        .catch(error => res.send(error))
    },
    create: (req, res) => {
        db.Size.findAll().then( sizes => {
            return res.render ('product/crear', {data: null, sizes})    
        }) 
    },
    save: (req, res) => {
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped()
            return db.Size.findAll().then( sizes => {
                return res.render('product/crear',{
                    errores: errores,
                    data: req.body,
                    sizes: sizes
                })
            })
        }
        if (req.files && req.files.length > 0){
                req.body.image = req.files[0].filename
            } else {
                req.body.image = 'default.png'};
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category_id: parseInt(req.body.category),
            price: req.body.price,
            discount: req.body.discount
        })
        .then((product) => {
            return product.addSizes(req.body.sizes)
        }).then(() => {
            return res.redirect ('/products/list')
        })
        .catch(error => res.send(error)) 
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: 'sizes'}, 'category' ]
        })
        .then(function(product){
            console.log(product)
            return res.render('product/detail', { product })
        })
        .catch(error => res.send(error)) 
    },
    edit: async (req, res) => {
        try {
            let sizes = await db.Size.findAll()
            let product = await  db.Product.findByPk(req.params.id)
            return res.render('product/edit',{ product, sizes });
        } catch (error) {
            res.send(error)
        }
    },
    update: async (req, res) => {
        try {
            let product = await db.Product.findByPk(req.params.id)
            await db.Product.update({
                name: req.body.name,
                description: req.body.description,
                image: req.files && req.files.length > 0 ? req.files[0].filename : product.image,
                category_id: parseInt(req.body.category),
                price: req.body.price,
                discount: req.body.discount,
            }, {
                where: {id: req.params.id}
            })
            await product.addSizes(req.body.sizes)
            return res.redirect('/products/detail/' + req.params.id)
        } catch (error) {
            res.send(error)
        }
    },
    productCart: (req, res) => {
        res.render('product/cart');
    },
    delete: (req, res) => {
        db.Product_size.destroy({
            where: {
                product_id: req.params.id 
            }
        }).then(() => {
            /* let productoABorrar = db.Product.findByPk(req.params.id);  */
            db.Product.destroy({
                where: {
                    id: req.params.id
                }  
            })
        }).then(() => {
            res.redirect('/products/list')
        })
        .catch(error => res.send(error))    
        
    }
}

module.exports = productsController