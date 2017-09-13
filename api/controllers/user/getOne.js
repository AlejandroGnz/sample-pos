'use strict'

const mongoose = require('mongoose');
const UserSchema = require('../../models/user.js');
const User = mongoose.model('userSchema');

module.exports = (req, res, next) => {
  User.findOne({id: req.body.id}, (err, user) => {
    err ? res.send(err) : res.json(user);
  })
}