'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: 'String',
    required: 'you should enter the name'
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('userSchema', userSchema);