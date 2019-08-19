const db = require('../models');

exports.getAll = async (userId) => {
    return await db.Todo.findAll({ where: { user_id: userId } });
};

exports.getById = async (id, userId) => {
    return await db.Todo.findOne({ where: { id, user_id: userId } });
};

exports.create = async (data) => {
    return await db.Todo.create({ completed: false, ...data });
};

exports.update = async (id, userId, data) => {
    const todo = await this.getById(id, userId);
    return await todo.update(data);
};

exports.delete = async (id, userId) => {
    const todo = await this.getById(id, userId);
    return await todo.destroy();
};
