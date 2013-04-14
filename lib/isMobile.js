module.exports = function(app) {
  return app.use(function(req, res, next) {
    var Android, Mobile, iPhone, isMobile, ua;    
    try{
      ua      = req.get('User-Agent');
      iPhone  = ua.match(/iPhone/i) || ua.match(/iPod/i);
      Android = ua.match(/Android/i);
      Mobile  = ua.match(/Mobile/i);
      res.locals.isMobile = (iPhone || (Android && Mobile));
      res.locals.isDesktop = !res.locals.isMobile;
    }catch(err){
      res.locals.isMobile  = false
      res.locals.isDesktop = false
    }
    return next();
  });
};