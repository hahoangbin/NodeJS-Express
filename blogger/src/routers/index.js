const mRouters = require('./news');
const siteRouter = require('./site');

function routes(app) {
  app.use('/news', mRouters);
  app.use('/', siteRouter);
}

module.exports = routes;
