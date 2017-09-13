'use strict'

const mongoose = require('mongoose');
const UserSchema = require('../../models/user.js');
const User = mongoose.model('userSchema');

module.exports = (req, res, next) => {
  User.remove({_id: req.params.id}, (err, userResult) => {
    err ? res.send(err) : res.json({message: 'User successfully deleted'});
  })
}