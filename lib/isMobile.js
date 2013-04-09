module.exports = function(req, res, next) {
	var Android, Mobile, iPhone, isMobile, ua;
	var ua = req.get('User-Agent');
	var iPhone = ua.match(/iPhone/i) || ua.match(/iPod/i);
	var Android = ua.match(/Android/i);
	var Mobile = ua.match(/Mobile/i);
	res.locals.isMobile = (iPhone || (Android && Mobile));
	res.locals.isDesktop = !res.locals.isMobile;
	return next();
};