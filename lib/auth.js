const User = require('../models/user');

function auth(req, res, next) {

  // if there is no userId in the sessions
  // move on to the nxt peice of middleware
  if(!req.session.userId) return next();

  User.findById(req.session.userId, (err, user) => {
    // if no user found, redirect back to login
    if(!user) return req.session.regenerate(() => {
      req.flash('danger', 'Your session has expired');
      return res.redirect('/login');
    });

    // `res.locals` is the same as `locals` in the templates
    // allows us to show/hide buttons and links

    res.locals.isAuthenticated = true;
    // allows us to personalize pages
    res.locals.currentUser = user;
    // allows us to access the user data in the controllers
    req.currentUser = user;


    next();
  });

}

module.exports = auth;
