const Article = require('../models/article');


function indexRoute(req, res) {

  const queryTitle = {};
  const querySubtitle = {};
  const queryBlockQuote = {};
  const queryText = {};
  if(req.query.search) {
    queryText.text = queryBlockQuote.blockQuote = queryTitle.title = querySubtitle.subtitle = new RegExp(req.query.search, 'i');
  }


  Article.find(  {$or: [ queryText, queryTitle, querySubtitle, queryBlockQuote ] }).sort({title: 1 })
    .populate('user')
    .exec((err, articles) => {
      console.log(err);
      res.render('articles/index', { articles, search: req.query.search });
    });

}



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
    req.flash('info', 'Your article has been created');
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
      req.flash('info', 'Your article has been updated');
      res.redirect(`/articles/${req.params.id}`);
    });

  });
}

function deleteRoute(req, res) {
  Article.findById(req.params.id, (err, article) => {
    article.remove(() => {
      req.flash('info', 'Your article has been deleted');
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
      req.flash('info', 'Your article has been updated');
      res.redirect(`/articles/${req.params.id}`);
    });
  });
}


function deleteCommentRoute(req, res) {

  Article.findById(req.params.id, (err, article) => {

    const comment = article.comments.id(req.params.commentId);


    if(!req.currentUser._id.equals(comment.user) && !req.currentUser.admin) {
      req.flash('danger', 'You do not have the authorisation');
      return res.redirect(`/articles/${req.params.id}`);
    }


    comment.remove();
    article.save(() => {
      req.flash('info', 'Your comment has been deleted');
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
