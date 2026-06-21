const messages = require('../data/messages');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('<h1>Chat room</h1>'));

router.post('/', (req, res) => {
  console.log('Message sent');
});

module.exports = router;
