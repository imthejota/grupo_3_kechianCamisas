const { urlencoded } = require('express')
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
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: 'sizes'}]
        })
        .then((product) => {
            return res.json({
                product
                /* url: */
            })
        })
        .catch(error => res.send(error)) 
    }
}

module.exports = productsController