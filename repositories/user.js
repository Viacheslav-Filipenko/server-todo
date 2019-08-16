const db = require('../models');

exports.getAll = async () => {
    return await db.User.findAll();
};

exports.getById = async id => {
    return await db.User.findOne({ where: { id } });
};

exports.getByEmail = async email => {
    return await db.User.findOne({ where: { email } });
};


exports.create = async data => {
    return await db.User.create(data);
};

exports.update = async (id, data) => {
    const user = await this.getById(id);
    return await user.update(data);
};

exports.delete = async id => {
    const user = await this.getById(id);
    return await user.destroy();
};
