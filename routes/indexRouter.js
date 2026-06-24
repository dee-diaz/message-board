const express = require('express');
const indexController = require('../controllers/indexController');
const { body } = require('express-validator');

const router = express.Router();

router.get('/', indexController.get);
router.post(
  '/',
  body('name').trim().notEmpty().withMessage('Name is required'),
  indexController.post,
);

module.exports = router;
