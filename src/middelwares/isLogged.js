//va a servir luego

let middelware = (req,res,next) => {
    if(req.session && req.session.user){
        next()
    }
    return res.redirect('/login')
}

module.exports = middelware