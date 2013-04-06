module.exports = function(app) {
  return app.use(function(req, res, next) {
    var Android, Mobile, iPhone, isMobile, ua;
    ua = req.get('User-Agent');
    iPhone = ua.match(/iPhone/i) || ua.match(/iPod/i);
    Android = ua.match(/Android/i);
    Mobile = ua.match(/Mobile/i);
    if (Android && !Mobile) {
      isMobile = false;
    } else if (iPhone || Android) {
      isMobile = true;
    } else {
      isMobile = false;
    }
    res.locals.isMobile = isMobile;
    res.locals.isDesktop = !isMobile;
    return next();
  });
};