const { validationResult } = require('express-validator');

const index_get = (req, res) => {
  res.render('index');
};

const index_post = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('index', { errors: errors.array() });
  }
  const userName = req.body.name;
  req.session.userName = userName;
  res.redirect('/chat');
};

module.exports = {
  get: index_get,
  post: index_post,
};
