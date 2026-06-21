const messages = require('../data/messages');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('<h1>Chat room</h1>'));


module.exports = router;