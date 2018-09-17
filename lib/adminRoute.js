

function adminRoute(req, res, next) {
  if(!req.currentUser.admin) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You do not have the authorisation');
      res.redirect('/login');
    });
  }
  next();

}


module.exports = adminRoute;
