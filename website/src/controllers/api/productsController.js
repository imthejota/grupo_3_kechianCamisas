let db = require('../../database/models')

let productsController = {
    list: (req, res) => { 
        db.Product.findAll({include: [{association: 'sizes'}]})
        .then(movies => {
            return res.json(movies)
        })
        .catch(error => res.send(error))
    }
}

module.exports = productsController