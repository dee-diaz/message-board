const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const { body } = require('express-validator');

router.get('/', chatController.get);

router.post(
  '/',
  body('message').trim().notEmpty().withMessage('Enter your message'),
  chatController.post,
);

module.exports = router;
