const todoRepository = require('../repositories/todo');

exports.getAll = async (req, res) => {
    try {
        const userId = req.user.id || null;
        const todos = await todoRepository.getAll(userId);

        res.json({
            data: todos,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getById = async (req, res) => {
    try {
        const id = +req.params.id;
        const userId = req.user.id || null;

        const todo = await todoRepository.getById(id, userId);

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { description, dueDate, endDate } = req.body;
        const userId = req.user.id || null;
        console.log('asdas')
        const todo = await todoRepository.create({
            description,
            user_id: userId,
            dueDate: dueDate || null,
            endDate: endDate || null,
        });

        res.status(201).json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const id = +req.params.id;
        const userId = req.user.id || null;

        const { description, completed, dueDate, endDate } = req.body;
        const todo = await todoRepository.update(id, userId, {
            description,
            completed,
            endDate: endDate || null,
            dueDate: dueDate || null,
        });

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = +req.params.id;
        const userId = req.user.id || null;

        await todoRepository.delete(id, userId);

        res.end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
