let db = require('../database/models')
const { validationResult } = require("express-validator");

const userControllersBBDD = {
    profile: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => res.send(user))
        .catch(error => res.send(error))
    },
    login: function(req, res) {
        console.log(req.session)
        res.render('user/login');
    },
    access : (req,res) => {
        const result = validationResult(req);
        if(!result.isEmpty()){
            let errores = result.mapped();
            return res.render('user/login',{
                style:'login',
                errores: errores,
                data: req.body
            })
        }
        if (req.body.recuerdame){
            res.cookie('user', req.body.correo,{maxAge: 10000 * 60 * 300})
        }
        db.User.findOne({
            where: { email: req.body.correo }
        })
            .then((user) => {
                return req.session.user = user;
            })
            .then(() => { return res.redirect('/') })
    },
    register: function(req, res) {
        res.render('user/register');
    },
    save: function(req, res) {
        if(req.file){
            req.body.image = req.file.filename;
        } else {
            req.body.image = 'default.png';
        }
        db.User.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount
        })
        .then(() => res.redirect ('/'))
        .catch(error => res.send(error)) 
    },
    /*update:,*/
    destroy: (req, res) => {
        db.User.destroy({
            where: {
                id: req.body.id,
            },
            force: true,
        }).then(() => {
            delete req.session.user;
            res.cookie('user', null, { maxAge: -1 });
            return res.redirect("/");
        }).catch(error => res.send(error));
    },
    logout: (req,res) => {
        delete req.session.user
        res.cookie('user', null,{maxAge: -1})
        return res.redirect('/')
    }
}

module.exports = userControllersBBDD;