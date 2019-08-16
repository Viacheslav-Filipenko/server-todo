const express = require('express');
const router = express.Router();
const passport = require('passport');

const todoRouter = require('./todo');
const authRouter = require('./auth');

router.use('/api/todos', passport.authenticate('jwt', { session: false }), todoRouter);
router.use('/auth', authRouter);

module.exports = router;
