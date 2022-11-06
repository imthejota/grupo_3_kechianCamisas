const { urlencoded } = require('express')
let db = require('../../database/models')

let productsController = {
    list: (req, res) => { 
        db.Product.findAll({include: [{association: 'sizes'}]})
        .then(products => {
            return res.json({
                count: products.length,
                countByCategory:  { // ? tiene que haber una mejor manera de hacerlo general
                    lisas: products.filter(products => products.category == "lisa").length,
                    estampadas: products.filter(products => products.category == "estampada").length,
                },
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