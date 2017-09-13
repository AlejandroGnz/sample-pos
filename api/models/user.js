'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  first_name: {
    type: 'String',
    required: 'you should enter the first_name'
  },
  last_name: {
    type: 'String',
    required: 'you should enter the last_name'
  },
  age: {
    type: 'Number',
    required: 'you should enter the age'
  },
  dni: {
    type: 'Number',
    required: 'you should enter the dni'
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('userSchema', userSchema);