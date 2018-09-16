const User = require('../models/user');

function newRoute(req, res) {
  res. render('sessions/new');
}

function createRoute(req, res) {

  User.findOne({email: req.body.email }, (err, user) => {

    if(!user || !user.validatePassword(req.body.password)) {
      // req.flash('danger', 'Invalid credentials');
      return res.redirect('/login');
    }

    req.session.userId = user._id;

    // req.flash('info', `Welcome back ${user.username}!`);
    res.redirect('/articles');
  });
}
//
// function deleteRoute(req, res) {
//
//
//   req.session.regenerate(() => res.redirect('/'));
// }

module.exports = {
  new: newRoute,
  create: createRoute
  // delete: deleteRoute
};
