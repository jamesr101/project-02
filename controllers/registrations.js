const User = require('../models/user');



// function indexRoute(req, res) {
//   Article.find().sort({title: 1 }).exec((err, articles) => {
//     res.render('articles/index', { articles });
//   });
// }


function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User.create(req.body, () => {
    res.redirect('/login');
  });
}

function showRoute(req, res) {
  User.findById(req.params.id)
    .populate('user')
    .exec((err, user, articles) => {
      res.render('registrations/show', { user, articles});
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
      res.redirect(`/users/${req.params.id}`);
    });

  });
}


function deleteRoute(req, res) {
  User.findById(req.params.id, (err, user) => {
    user.remove(() => {
      req.session.regenerate(() => {
        req.flash('info', 'Your account has been successfully deleted');
        return res.redirect('/articles');
      });
    });

  });
}


module.exports = {
  // index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
