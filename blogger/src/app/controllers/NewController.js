class MController {
  // [GET] news
  index(req, res) {
    res.render('news');
  }

  show(req, res) {
    res.send('Show new path detail');
  }
}

module.exports = new MController();

const newController = require('./NewController');
