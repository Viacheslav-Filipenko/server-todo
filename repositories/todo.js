const db = require('../models');

exports.getAll = async () => {
    return await db.Todo.findAll();
};

exports.getById = async id => {
    return await db.Todo.findOne({ where: { id } });
};

exports.create = async (description, date) => {
    const dueDate = date || null;
    return await db.Todo.create({ description, completed: false, dueDate });
};

exports.update = async (id, data) => {
    const todo = await this.getById(id);
    return await todo.update(data);
};

exports.delete = async id => {
    const todo = await this.getById(id);
    return await todo.destroy();
};
