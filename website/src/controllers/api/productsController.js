let db = require('../../database/models')

let productsController = {
    list: (req, res) => { 
        db.Product.findAll({include: ['sizes']})
        .then(products => {
            let info = []
            products.forEach(element => {
                let objeto = {
                    id: element.id,
                    name: element.name,
                    description: element.description,
                    sizes: [],
                    url: "http://localhost:2020/api/products/" + element.id
                }
                element.sizes.forEach(elementito => {
                    let objetoSizes  = {
                        id: elementito.id,
                        size: elementito.size
                    }
                    objeto.sizes.push(objetoSizes)
                });
                info.push(objeto)
            });
            return res.status(200).send({
                meta: {
                    status: 200,
                    count: products.length - 1,
                    countByCategory: {
                        lisas: products.filter(products => products.category == "lisa").length,
                        estampadas: products.filter(products => products.category == "estampada").length,
                    }
                },
                products: info,
            })
        })
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['sizes']
        })
        .then((product) => {
            return res.status(200).send({
                product
            })
        })
        .catch(error => res.send(error)) 
    }
}

module.exports = productsController