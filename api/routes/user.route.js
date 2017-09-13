'use strict'

const userResource = require('../controllers/user/');
const User = require('../models/user');

module.exports = (app) => {

  app.route('/user')
    .get(userResource.getAll)
    .post(userResource.create)
  
  app.route('/user/:id')
    .get(userResource.getOne)
    .put(userResource.update)
    .delete(userResource.delete)
}
