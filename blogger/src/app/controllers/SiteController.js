
const Course = require('../models/Course')
const { muntipleMongooseToObject } = require('../../util/mongoose.js')

class SiteController {
  // [GET]
  async index(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: muntipleMongooseToObject(courses)
        })
      })
      .catch(next)
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
