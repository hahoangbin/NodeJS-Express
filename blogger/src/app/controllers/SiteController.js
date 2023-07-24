
const course = require('../models/Course')

class SiteController {
  // [GET] news
  index(req, res) {
    // res.render('home');
    course.find({}, function(err, courses) {
      if (!err) res.json(courses)
      res.status(400).json({error: 'message error !!'})
    })
  }

  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
