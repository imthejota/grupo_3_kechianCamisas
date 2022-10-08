//va a servir luego

let middleware = (req,res,next) => {
    if(req.session && req.session.user){
        return next()
    }
    console.log(req.session)
    return res.redirect('/login')
}

module.exports = middleware