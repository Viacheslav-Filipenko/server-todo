const todoService = require('../services/todo.service');

exports.getAll = async (req, res) => {
    try {
        const { id } = req.user;
        const todos = await todoService.getAll(id);

        res.json({
            data: todos,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userId = req.user.id;

        const todo = await todoService.getById(id, userId);

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { description, dueDate } = req.body;
        const userId = req.user.id;

        if (!description) {
            throw new Error('Description is required');
        }

        const todo = await todoService.create({
            description,
            user_id: userId,
            dueDate: dueDate || null,
        });

        res.status(201).json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.complete = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userId = req.user.id;

        const todo = await todoService.complete(id, userId);

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.uncomplete = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userId = req.user.id;

        const todo = await todoService.uncomplete(id, userId);

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userId = req.user.id;

        const { description, dueDate } = req.body;

        if (!description) {
            throw new Error('Description is required');
        }

        const todo = await todoService.update(id, userId, {
            description,
            dueDate: dueDate || null,
        });

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const userId = req.user.id;

        await todoService.delete(id, userId);

        res.end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
