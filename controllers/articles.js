const Article = require('../models/article');



function indexRoute(req, res) {
  Article.find().sort({title: 1 }).exec((err, articles) => {
    res.render('articles/index', { articles });
  });
}


function showRoute(req, res) {
  Article.findById(req.params.id)
    .exec((err, article) => {
      res.render('articles/show', { article });
    });
}

function newRoute(req, res) {
  res.render('articles/new');
}

function createRoute(req, res) {
  Article.create(req.body, (err) => {
    console.log(err);
    res.redirect('/articles');
  });
}

function editRoute(req, res) {
  Article.findById(req.params.id)
    .exec((err, article) => {
      res.render('articles/edit', { article });
    });
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute
};
