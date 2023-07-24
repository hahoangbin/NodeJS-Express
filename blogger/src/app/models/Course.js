
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: String,
  description: String,
  thumbnail: String,
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Course', Course)
