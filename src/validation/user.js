const Joi = require('@hapi/joi');

const shema = Joi.object().keys({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30),
    password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required(),
});

module.exports = shema;
