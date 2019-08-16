const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwtSecret = require('../config/auth/auth');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await userRepository.getByEmail(email);

    if (!user) {
        res.status(400).end();
    } else {
        const isPasswordMatch = await bcrypt.compareSync(password, user.password);

        if (isPasswordMatch) {
            const token = jwt.sign({ id: user.id }, jwtSecret.secret);
            res.json({ token });
        } else {
            res.status(400).end();
        }
    }
};

exports.signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const isUserExist = await userRepository.getByEmail(email);

    if (isUserExist) {
        res.status(409).end();
    } else {
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(password, salt);

        await userRepository.create({
            first_name: firstName,
            last_name: lastName,
            email,
            password: hash,
        });

        res.end();
    }
};
