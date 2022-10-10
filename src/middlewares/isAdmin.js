const middleware = (req,res,next) => {

	if(req.session.user.admin == 1){
		return next()
	}
	
	return res.redirect('/')
	
}

module.exports = middleware