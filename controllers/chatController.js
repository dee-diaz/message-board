const messages = require('../data/messages');

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

module.exports = {
  get: chat_get,
};

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
