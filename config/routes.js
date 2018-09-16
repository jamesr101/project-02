const router = require('express').Router();
const articlesController = require('../controllers/articles');
const registrationsController = require('../controllers/registrations');
const sessionsController = require('../controllers/sessions');

router.get('/', (req, res) => res.render('home'));


router.get('/articles', articlesController.index);

router.get('/articles/new', articlesController.new);

router.get('/articles/:id', articlesController.show);

router.post('/articles', articlesController.create);

router.get('/articles/:id/edit', articlesController.edit);

router.put('/articles/:id', articlesController.update);

router.delete('/articles/:id', articlesController.delete);


router.get('/register', registrationsController.new );
router.post('/register', registrationsController.create );

router.get('/login', sessionsController.new);
router.post('/login', sessionsController.create);
router.get('/logout', sessionsController.delete);


module.exports = router;
