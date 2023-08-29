
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const orderSchema = new Schema({
  ticket:{type: String, unique: true},
  pair:String,
  direction:String,
  lot:String,
  price:String,
  sl:String,
  tp:String,
  timeopen:String,
  comment:String,
});

module.exports = mongoose.model('order', orderSchema)
