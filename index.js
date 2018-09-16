const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./config/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const auth = require('./lib/auth');

const {dbURI, port } = require('./config/environment');

mongoose.connect(dbURI);
app.use(ejsLayouts);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(req => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(session({
  secret: 'shhh',
  resave: false,
  saveUninitialized: false
}));
app.use(auth);

app.use(express.static(`${__dirname}/public`));


// app.get('/', (req, res) => res.send('<h1>Hello world!</h1>'));

app.use(routes);

app.listen(port, () => console.log(`Express is running on port ${port}`));
