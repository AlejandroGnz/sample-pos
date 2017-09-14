'use strict'

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: 'owner id is required'
  },
  type: {
    type: 'String',
    required: 'type id is required'
  },
  number:{
    type: 'Number',
    required: 'number is required'
  },
  create_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('userSchema', userSchema);