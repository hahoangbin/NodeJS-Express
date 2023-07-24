const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const routes = require('./routers');
const db = require('./config/db')

// connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

routes(app);

// HTTP logger
app.use(morgan('combined'));

// template handlebars
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
