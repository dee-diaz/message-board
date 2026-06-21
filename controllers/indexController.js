const index_get = (req, res) => {
  res.render('index');
};

const index_post = (req, res) => {
  const userName = req.body.name;
  console.log(userName, typeof userName);
  res.redirect('/');
};

module.exports = {
  index_get,
  index_post,
};
