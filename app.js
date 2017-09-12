'use strict'

const express     = require('express');
const app         = express();
const routes      = require('./routes/');
const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// function that register all routes
routes(app);

app.listen(3000, () => {
  console.log("running app in port " + arguments[0]);
})