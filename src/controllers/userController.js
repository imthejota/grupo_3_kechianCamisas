


const userControllers = {
    register: function(req, res) {
        res.render('user/register');
    },

    login: function(req, res) {
        res.render('user/login');
    },


}

module.exports = userControllers;