const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwtSecret = require('../config/auth/auth');
const jwt = require('jsonwebtoken');
const Joi = require('@hapi/joi');
const userRepository = require('../repositories/user');

const userShema = require('../validation/user');

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = Joi.validate(
            { email, password },
            userShema.without('email', 'login').without('firstName', 'lastName'),
        );

        if (error) {
            throw new Error(error.details[0].message);
        }

        const user = await userRepository.getByEmail(email);

        if (!user) {
            throw new Error('User doesn\'t exist');
        }
        const isPasswordMatch = await bcrypt.compareSync(password, user.password);

        if (!isPasswordMatch) {
            throw new Error('Wrong password');
        }

        const token = jwt.sign({ id: user.id }, jwtSecret.secret);
        res.json({ token });
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

exports.register = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const isUserExist = await userRepository.getByEmail(email);

        if (!email) {
            throw new Error('Email is required');
        }

        if (!password) {
            throw new Error('Password is required');
        }

        if (isUserExist) {
            throw new Error('User already exist');
        }
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);

        await userRepository.create({
            first_name: firstName,
            last_name: lastName,
            email,
            password: hash,
        });

        res.end();
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};
