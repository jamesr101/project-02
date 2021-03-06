const User = require('../models/user');



function indexRoute(req, res) {
  User.find().sort({email: 1 }).exec((err, users) => {
    res.render('registrations/index', { users });
  });
}


function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User.create(req.body, () => {


    User.findOne({email: req.body.email }, (err, user) => {

      req.session.userId = user._id;

      req.flash('info', 'Your account has been created');
      res.redirect('/');

    });


  });
}

function showRoute(req, res) {
  // User.findById(req.currentUser._id).populate('cocktails').exec((err, user) => {
  // get all the cocktails that a user created...
  User.populate(req.currentUser, { path: 'articles' }, (err, user) => {

    console.log(user.articles);
    res.render('registrations/show', { user });
  });
}

function editRoute(req, res) {
  User.findById(req.params.id, (err, user) => {
    res.render('registrations/edit', { user });
  });
}

function updateRoute(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.set(req.body);
    user.save(() => {

      if (res.locals.currentUser.admin){
        req.flash('info', 'Account has been updated');
        return res.redirect('/users');
      } else {
        req.flash('info', 'Your account has been updated');
        res.redirect(`/users/${req.params.id}`);

      }


    });

  });
}




function deleteRoute(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.remove(() => {

      if (res.locals.currentUser.admin){
        req.flash('info', 'Account has been successfully deleted');
        return res.redirect('/users');
      } else {
        req.session.regenerate(() => {
          req.flash('info', 'Your account has been successfully deleted');
          return res.redirect('/articles');
        });
      }

    });
  });
}


module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
