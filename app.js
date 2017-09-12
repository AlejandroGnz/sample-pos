'use strict'

const express = require('express');
const app     = express();


app.listen(3000, () => {
  console.log("running app in port " + arguments[0]);
})