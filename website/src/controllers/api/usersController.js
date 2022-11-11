let db = require('../../database/models')

let usersController = {
    list: (req, res) => { 
        db.User.findAll()
        .then(users => {
            let info = []
            users.forEach(e => {
                let objeto = {
                    id: e.id,
                    firstName: e.firstName,
                    email: e.email,
                    detail: "http://localhost:2020/api/users/" + e.id
                }
                info.push(objeto)
            });
            return res.status(200).send({
                meta: {
                    status: 200,
                    count: users.length
                },
                users: info
            });
        })
        .catch(error => res.send(error))
    },
    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((user) => {
            let usuario = {
                id: user.dataValues.id,
                firstName: user.dataValues.firstName,
                lastName: user.dataValues.lastName,
                location: user.dataValues.location,
                email: user.dataValues.email,
                imageUrl: "http://localhost:2020/users/" + user.dataValues.image
            };
            return res.status(200).send({
                meta:{
                    status: 200
                },
                usuario
            })
        })
        .catch(error => res.send(error)) 
    }
}

module.exports = usersController;