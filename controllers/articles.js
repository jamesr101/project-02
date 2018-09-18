const Article = require('../models/article');



function indexRoute(req, res) {

  const queryTitle = {};
  const querySubtitle = {};
  const queryBlockQuote = {};
  if(req.query.search) {
    queryBlockQuote.blockQuote = queryTitle.title = querySubtitle.subtitle = new RegExp(req.query.search, 'i');
  }


  Article.find(  {$or: [ queryTitle, querySubtitle, queryBlockQuote ] }).sort({title: 1 })
    .populate('user')
    .exec((err, articles) => {
      console.log(err);
      res.render('articles/index', { articles, search: req.query.search });
    });

}


// function indexRoute(req, res) {
//
//   const query = {};
//   if(req.query.search) query.name = new RegExp(req.query.search, 'i');
//
//   Cocktail.find(query).sort({ name: 1 }).exec((err, cocktails) => {
//     res.render('cocktails/index', { cocktails, search: req.query.search });
//   });
// }


function showRoute(req, res) {
  Article.findById(req.params.id)
    .populate('user comments.user')
    .exec((err, article) => {
      res.render('articles/show', { article });
    });
}

function newRoute(req, res) {
  res.render('articles/new');
}

function createRoute(req, res) {
  req.body.user = req.currentUser;
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
  Article.findById(req.params.id, (err, article) => {
    article.set(req.body);
    article.save(() => {
      res.redirect(`/articles/${req.params.id}`);
    });

  });
}

function deleteRoute(req, res) {
  Article.findById(req.params.id, (err, article) => {
    article.remove(() => {
      res.redirect('/articles');
    });

  });
}

function createCommentRoute(req, res) {
  req.body.user = req.currentUser;

  Article.findById(req.params.id, (err, article) => {
    article.comments.push(req.body);
    article.save(() => {
      req.flash('info', 'Your comment has been submitted for moderation');
      res.redirect(`/articles/${req.params.id}`);
    });
  });
}

function updateCommentRoute(req, res) {

  req.body.moderated = (req.body.moderated === 'true');

  Article.findById(req.params.id, (err, article) => {

    const comment = article.comments.id(req.params.commentId);

    comment.set(req.body);
    article.save(() => {
      res.redirect(`/articles/${req.params.id}`);
    });
  });
}


function deleteCommentRoute(req, res) {

  Article.findById(req.params.id, (err, article) => {

    const comment = article.comments.id(req.params.commentId);


    if(!req.currentUser._id.equals(comment.user)) {
      return res.redirect(`/articles/${req.params.id}`);
    }


    comment.remove();
    article.save(() => {
      res.redirect(`/articles/${req.params.id}`);
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
  delete: deleteRoute,
  createComment: createCommentRoute,
  updateComment: updateCommentRoute,
  deleteComment: deleteCommentRoute
};
