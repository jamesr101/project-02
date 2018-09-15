const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./config/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {dbURI, port } = require('./config/environment');

mongoose.connect(dbURI);
app.use(ejsLayouts);

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/public`));

// app.get('/', (req, res) => res.send('<h1>Hello world!</h1>'));

app.use(routes);

app.listen(port, () => console.log(`Express is running on port ${port}`));
