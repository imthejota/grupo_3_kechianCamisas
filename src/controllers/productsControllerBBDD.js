let db = require('../database/models')

let productsController = {
    list: function (req, res){
        db.Product.findAll()
        .then(function(products){
            return res.render('product/list', { products })
        })
    }
}