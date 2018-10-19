const router = require('express').Router();
const articlesController = require('../controllers/articles');
const registrationsController = require('../controllers/registrations');
const sessionsController = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');


router.get('/', (req, res) => res.render('home'));


router.get('/articles', articlesController.index);

router.get('/articles/new', secureRoute, articlesController.new);

router.get('/articles/:id', articlesController.show);

router.post('/articles', secureRoute, articlesController.create);

router.get('/articles/:id/edit', secureRoute, articlesController.edit);

router.put('/articles/:id', secureRoute, articlesController.update);

router.delete('/articles/:id', secureRoute, articlesController.delete);


router.get('/register', registrationsController.new );
router.post('/register', registrationsController.create );

router.get('/login', sessionsController.new);
router.post('/login', sessionsController.create);
router.get('/logout', sessionsController.delete);

router.post('/articles/:id/comments', secureRoute, articlesController.createComment);
router.delete('/articles/:id/comments/:commentId', secureRoute, articlesController.deleteComment);
router.put('/articles/:id/comments/:commentId', secureRoute, articlesController.updateComment);

router.get('/users', secureRoute, adminRoute, registrationsController.index);
router.get('/users/:id', secureRoute, registrationsController.show);

router.get('/users/:id/edit', secureRoute, registrationsController.edit);
router.put('/users/:id', secureRoute, registrationsController.update);
router.delete('/users/:id', secureRoute, registrationsController.delete);



module.exports = router;
