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
                    count: products.length,
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
        db.Product.findByPk(req.params.id, {include: ['sizes']})
        .then((product) => {
            let producto = { // ! esto debería ser con un for in ?
                id: product.dataValues.id,
                name: product.dataValues.name,
                description: product.dataValues.description,
                category: product.dataValues.category,
                size: product.dataValues.sizes,
                price: product.dataValues.price,
                discount: product.dataValues.discount,
                imageUrl: "http://localhost:2020/products/" + product.dataValues.image
            };
            return res.status(200).send({
                meta:{
                    status: 200
                },
                producto
            })
        })
        .catch(error => res.send(error)) 
    }
}

module.exports = productsController