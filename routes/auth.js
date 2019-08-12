const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth');

router.post('/', controller.login);
router.post('/', controller.signup);

module.exports = router;
