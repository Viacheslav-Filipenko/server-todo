const Joi = require('@hapi/joi');

const shema = Joi.object().keys({
    description: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    dueDate: Joi.date()
});

module.exports = shema;
