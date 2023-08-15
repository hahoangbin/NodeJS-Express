module.exports = {
  muntipleMongooseToObject: function (mongooseArray) {
    return mongooseArray.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};