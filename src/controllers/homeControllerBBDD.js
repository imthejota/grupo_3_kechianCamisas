let db = require('../database/models')

const homeController = {
    home:(req, res) => {
        db.Product.findAll({
            include: [{association: 'sizes'}],
            limit: 4 
        })
        .then(function(products){
            /* console.log(products) */
            return res.render('index', { products })
        })
        .catch(error => res.send(error))
    }
}

module.exports = homeController