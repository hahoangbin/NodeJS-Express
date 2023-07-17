const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

var hbs = handlebars.create({
  // Specify helpers which are only registered on this instance.
  extname: '.hbs',
  helpers: {
      foo: function () { return 'FOO!'; },
      bar: function () { return 'BAR!'; }
  }
});

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})

// HTTP logger
app.use(morgan('combined'))

// template handlebars
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})