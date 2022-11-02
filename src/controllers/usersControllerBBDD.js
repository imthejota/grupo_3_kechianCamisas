const db = require('../database/models')
const bcrypt = require('bcryptjs'); 
const { validationResult } = require("express-validator");

const userControllersBBDD = {
    profile: (req, res) => { // TODO agregar la vista correspondiente, la ruta ya está creada
        db.User.findByPk(req.params.id)
        .then(user => res.send(user))
        .catch(error => res.send(error))
    },
    login: function(req, res) {
        console.log(req.session)
        res.render('user/login');
    },
    access : async (req,res) => {
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
        /* EXPLICACION
        let user = db.User.findOne({where: { email: req.body.correo }})
        .then((usuario) => {
            return usuario
        })
         */ 
        let user = await db.User.findOne({where: { email: req.body.correo }}).catch(error => res.send(error))
        req.session.user = user;
        console.log(req.session.user);
        return res.redirect('/')
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
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            location: req.body.location,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            admin: req.body.email.includes("@kechian.com")? 1 : 0,
            image: req.body.image
        })
        .then(() => res.redirect ('/'))
        .catch(error => res.send(error)) 
    },
    edit: function(req, res) {
        db.User.findByPk(req.params.id)
        .then(function (user){
            return res.render('user/editUser',{user});
        })
        .catch(error => res.send(error))
    },
    update: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(usuario => {
                return db.User.update({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    location: req.body.location,
                    email: req.body.email,
                    image: req.files && req.files.length > 0 ? req.files[0].filename : usuario.image
                },{
                    where: { id: req.params.id }
                })
            })
            .then(() => res.redirect('/user/' + req.params.id))
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        console.log(req.params.id);
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then((user) => {
            console.log(user);
            delete req.session.user;
            res.cookie('user', null, { maxAge: -1 });
            return res.redirect('/');
        }).catch(error => res.send(error))
    },
    logout: (req,res) => {
        delete req.session.user
        res.cookie('user', null,{maxAge: -1})
        return res.redirect('/')
    }
}

module.exports = userControllersBBDD;