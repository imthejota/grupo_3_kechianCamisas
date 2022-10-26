let db = require('../database/models')

let productsController = {
    index: (req, res) => {
        db.Product.findAll({
            include: [{association: 'sizes'}]
        })
        .then(function(products){
            return res.render('product/list', { products })
        })
        .catch(error => res.send(error))
    },
    create: (req, res) => {
        return res.render ('product/crear')
    },
    save: (req, res) => {
        if (req.files && req.files.length > 0){
                req.body.image = req.files[0].filename
            } else {
                req.body.image = 'default.png'};
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount
        })
        .then(() => {
            return res.redirect ('/products/list')
        })
        .catch(error => res.send(error)) 
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: 'sizes'}]
        })
        .then(function(product){
            console.log(req.params)
            return res.render('product/detail', { product })
        })
        .catch(error => res.send(error)) 
    },
    edit: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(function (product){
            return res.render('product/edit',{ product });
        })
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(elemento => {
            return db.Product.update({
                name: req.body.name,
                description: req.body.description,
                image: req.files && req.files.length > 0 ? req.files[0].filename : elemento.image,
                price: req.body.price,
                discount: req.body.discount,
                
            }, {
                where: {
                    id: req.params.id
                }
            })
        }).then(() =>{
            return res.redirect('/products/detail/' + req.params.id)
        })
        .catch(error => res.send(error))
    },
    productCart: (req, res) => {
        res.render('product/cart');
    },
    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.redirect('/products/list')
        })
        .catch(error => res.send(error)) // TODO Agrego catch;
        
    }
}

module.exports = productsController