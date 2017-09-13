'use strict'

const mongoose = require('mongoose');
const UserSchema = require('../../models/user.js');
const User = mongoose.model('userSchema');

module.exports = (req, res, next) => {
  User.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, userResult) => {
    err ? res.send(err) : res.json(userResult);
  })
}