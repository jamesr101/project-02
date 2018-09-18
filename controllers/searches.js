const Article = require('../models/article');


function indexRoute(req, res) {
  Article.find({title: req.body.search}).sort({title: 1 })
    .populate('user')
    .exec((err, articles) => {
      res.render('articles/index', { articles });
    });
}





module.exports = {
  index: indexRoute
};
