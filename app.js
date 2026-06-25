require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;
const indexRouter = require('./routes/indexRouter');
const chatRouter = require('./routes/chatRouter');
const session = require('express-session');

// Middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

// View engine
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/chat', chatRouter);

app.get('/{*splat}', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app listening on port ${PORT}!`);
});
