const router = require('express').Router();
const articlesController = require('../controllers/articles');

router.get('/', (req, res) => res.render('home'));


router.get('/articles', articlesController.index);

router.get('/articles/new', articlesController.new);

router.get('/articles/:id', articlesController.show);

router.post('/articles', articlesController.create);

router.get('/articles/:id/edit', articlesController.edit);

module.exports = router;
