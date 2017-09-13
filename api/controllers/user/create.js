'use strict'

const mongoose = require('mongoose');
const UserSchema = require('../../models/user.js');
const User = mongoose.model('userSchema');

module.exports = (req, res, next) => {
  if (req.body) {
    const user = new User(req.body);
    user.save( (err, userResult) => {
      err ? res.send(err.errors[Object.keys(err.errors)[0]].message) : res.json(user);
    })
  }
}