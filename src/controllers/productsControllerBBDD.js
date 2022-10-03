let db = require('../database/models')

let productsController = {
    index: (req, res) => {
        db.Product.findAll()
        .then(function(products){
            return res.render('product/list', { products })
        })
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
        return res.redirect ('/');   
    },
    detail: (req, res) => {
        // TODO asociaciones
        db.Product.findByPk(req.params.id)
        .then(function(product){
            res.render('product/detail', { product })
        })
    },
    edit: (req, res) => {
        let pedidoProduct = db.Product.findByPk(req.params.id);
    },
    update: (req, res) => {
        db.Product.findByPk(req.params.id)
        .then(elemento => {
            return db.Product.update({
                name: req.body.name,
                description: req.body.description,
                image: req.files && req.files.length > 0 ? req.files[0].filename : elemento.image,
                category: req.body.category,
                price: req.body.price,
                discount: req.body.discount,
                
            }, {
                where: {
                    id: req.params.id
                }
            })
        }).then(() =>{
            res.redirect('product/detail/' + req.params.id)
        })
        
    },
    productCart: (req, res) => {
        res.render('product/cart');
    },
    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/product');
    }
}