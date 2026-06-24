const path = require('node:path');
const messages = require('../data/messages');

const chat_get = (req, res) => {
  res.render('chat', { userName: req.session.userName, messages });
};

module.exports = {
  get: chat_get,
};
