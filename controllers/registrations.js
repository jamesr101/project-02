const User = require('../models/user');



// function indexRoute(req, res) {
//   Article.find().sort({title: 1 }).exec((err, articles) => {
//     res.render('articles/index', { articles });
//   });
// }


// function showRoute(req, res) {
//   Article.findById(req.params.id)
//     .exec((err, article) => {
//       res.render('articles/show', { article });
//     });
// }

function newRoute(req, res) {
  res.render('registrations/new');
}

function createRoute(req, res) {
  User.create(req.body, () => {
    res.redirect('/articles');
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
      res.redirect(`/user/${req.params.id}`);
    });

  });
}


function deleteRoute(req, res) {
  User.findById(req.params.id, (err, article) => {
    article.remove(() => {
      res.redirect('/articles');
    });

  });
}

function showRoute(req, res) {
  User.findById(req.params.id)
    .populate('user')
    .exec((err, user, articles) => {
      res.render('registrations/show', { user, articles});
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
