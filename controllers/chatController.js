const messages = require('../data/messages');
const { validationResult } = require('express-validator');

const chat_get = (req, res) => {
  if (!req.session.userName) {
    return res.redirect('/');
  }
  const fMessages = messages.map((message) => {
    return {
      user: message.user,
      text: message.text,
      added: formatDateAndTime(message.added),
    };
  });
  res.render('chat', { userName: req.session.userName, fMessages });
};

const chat_post = (req, res) => {
  if (!req.session.userName) {
    return res.redirect('/');
  }
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.redirect('/chat');
    return;
  }

  messages.push({
    text: req.body.message,
    user: req.session.userName,
    added: new Date(),
  });

  res.redirect('/chat');
};

module.exports = {
  get: chat_get,
  post: chat_post,
};

// Helper
function formatDateAndTime(date) {
  const fTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const fDate = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
  });

  return `${fTime} • ${fDate}`;
}
