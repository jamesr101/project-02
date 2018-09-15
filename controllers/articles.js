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
  Article.create(req.body, () => {
    res.redirect('/articles');
  });
}

function editRoute(req, res) {
  Article.findById(req.params.id, (err, article) => {
    res.render('articles/edit', { article });
  });
}

function updateRoute(req, res) {
  console.log(req.params.id);
  Article.findById(req.params.id, (err, article) => {
    article.set(req.body);
    console.log(req.params.id);
    article.save(() => {
      res.redirect(`/articles/${req.params.id}`);
    });

  });
}


// function updateRoute(req, res) {
//   Cocktail.findById(req.params.id, (err, cocktail) => {
//     cocktail.set(req.body);
//     cocktail.save(() => {
//       res.redirect(`/cocktails/${req.params.id}`);
//     });
//   });
// }

module.exports = {
  index: indexRoute,
  show: showRoute,
  new: newRoute,
  create: createRoute,
  edit: editRoute,
  update: updateRoute
};
