let middelware = (req,res,next) => {
    if(req.session && req.session.user){
        next()
    }
    return res.redirect('/user/login')
}

module.exports = middelware