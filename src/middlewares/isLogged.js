//va a servir luego

let middleware = (req,res,next) => {
    if(req.session && req.session.user){
        next()
    }
    return res.redirect('/login')
}

module.exports = middleware