const db = require('../models');

exports.getAll = async () => {
	return await db.Todo.findAll();
};

exports.getById = async id => {
	return await db.Todo.findById(id);
};

exports.create = async description => {
	return await db.Todo.create({ description, completed: false });
};

exports.update = async (id, data) => {
	const todo = await getById(id);
	return await db.Todo.update({ description, data });
};

exports.delete = async id => {
	const todo = await getById(id);
	return await db.Todo.destroy();
};
