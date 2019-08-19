const todoRepository = require('../repositories/todo');

exports.getAll = async userId => {
    return await todoRepository.getAll(userId);
};

exports.getById = async (id, userId) => {
    return await todoRepository.getById(id, userId);
};

exports.create = async (data) => {
    return await todoRepository.create(data);
};

exports.complete = async (id, userId) => {
    return await todoRepository.update(id, userId, {
        completed: true,
        endDate: new Date(),
    });
};

exports.uncomplete = async (id, userId) => {
    return await todoRepository.update(id, userId, {
        completed: false,
        endDate: null,
    });
};

exports.update = async (id, userId, data) => {
    return await todoRepository.update(id, userId, data);
};

exports.delete = async (id, userId) => {
    await todoRepository.delete(id, userId);
};
