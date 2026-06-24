const messages = require('../data/messages');

const chat_get = (req, res) => {
  if (!req.session.userName) {
    return res.redirect('/');
  }
  res.render('chat', { userName: req.session.userName, messages });
};

module.exports = {
  get: chat_get,
};
