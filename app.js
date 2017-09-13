'use strict'

const express     = require('express');
const app         = express();
const mongoose    = require('mongoose')
const routes      = require('./api/routes/');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');

app.use(morgan(':method :url :status - :response-time ms'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/POS', { useMongoClient: true });

// function that register all routes
routes(app);

app.listen(3000, () => {
  console.log("running app in port 3000");
})