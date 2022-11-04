let middleware = (req,res,next) => {
    if(req.session && req.session.user){
        
        if (req.session.user.id == req.params.id || req.session.user.admin == 1){
            return next()            
        } 
        return res.redirect ("/user/" + req.session.user.id)
    }
    return res.redirect('/login')
}

module.exports = middleware