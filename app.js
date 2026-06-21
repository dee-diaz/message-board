const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRouter');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static('public'));

// View engine
app.set('view engine', 'ejs');


app.use('/', indexRouter);
app.use('/chat', messageRouter);

app.get('/{*splat}', (req, res) => {
  res.status(404).send('<h1>Oops, page not found</h1>');
});

app.listen(PORT, () => console.log(`'listening for requests on port ${PORT}'`));
