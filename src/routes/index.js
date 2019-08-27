const express = require('express');
const router = express.Router();
const passport = require('passport');

const todoRouter = require('./todo');
const authRouter = require('./auth');
const userRouter = require('./user');

router.use('/todos', passport.authenticate('jwt', { session: false }), todoRouter);
router.use('/users', passport.authenticate('jwt', { session: false }), userRouter);
router.use('/auth', authRouter);

module.exports = router;
