const todoRepository = require('../repositories/todo');

exports.getAll = async (req, res) => {
    try {
        const todos = await todoRepository.getAll();

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

        const todo = await todoRepository.getById(id);

        res.json({
            data: todo,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { description } = req.body;

        const { id } = await todoRepository.create(description);

        res.json({
            data: id,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const id = +req.params.id;

        const { description, completed } = req.body;

        await todoRepository.update(id, { description, completed });

        res.json({
            data: id,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = +req.params.id;

        await todoRepository.delete(id);

        res.json({
            data: id,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
