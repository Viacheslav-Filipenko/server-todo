const express = require('express');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');

const jwtSecret = require('./config/auth/auth');

const userRepository = require('./repositories/user');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtSecret.secret;

passport.use(
    new JwtStrategy(opts, async function(jwt_payload, done) {
        try {
            const user = await userRepository.getById(jwt_payload.id);
            if (user) {
                return done(null, user);
            }
            return done(null, false);
        } catch (error) {
            return done(error, false);
        }
    }),
);

const router = require('./routes/index');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port);
