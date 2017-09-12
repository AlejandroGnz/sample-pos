'use strict'

const userRoutes = require('./user.route');

module.exports = app => {
  userRoutes(app);
}