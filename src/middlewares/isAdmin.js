const middleware = (req,res,next) => {

	if(req.session.user.email.includes("@kechian")){
		return next()
	}
	
	return res.redirect('/')
	
}

module.exports = middleware