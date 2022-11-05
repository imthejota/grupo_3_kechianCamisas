let db = require('../../database/models')

let productsController = {
    list: (req, res) => { 
        db.Product.findAll({include: [{association: 'sizes'}]})
        .then(products => {
            return res.json({
                count: products.length,
                /* countByCategory:   */
                products
            })
        })
        .catch(error => res.send(error))
    }
}

module.exports = productsController