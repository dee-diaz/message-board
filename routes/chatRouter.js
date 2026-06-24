const messages = require('../data/messages');
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.get);

router.post('/', (req, res) => {
  console.log('Message sent');
});

module.exports = router;
