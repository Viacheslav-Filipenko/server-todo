const userRepository = require('../repositories/user');

class User {
    constructor(object) {
        this.id = object.id;
        this.firstName = object.first_name;
        this.lastName = object.last_name;
        this.email = object.email;
        this.isAdmin = object.is_admin;
    }
}

exports.findAll = async (req, res) => {
    try {
        const data = await userRepository.getAll();

        const users = data.map(item => new User(item));

        res.json({
            data: {
                count: users.length,
                items: users,
            },
        });
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

exports.findOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await userRepository.getById(id);
        const user = new User(data);
        res.json({
            data: user,
        });
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

exports.updateCurrent = async (req, res) => {
    try {
        const id = req.user.id;
        const { firstName, lastName } = req.body;

        const data = {};

        if (firstName && firstName.trim() !== '') {
            data.first_name = firstName;
        }

        if (lastName && lastName.trim() !== '') {
            data.last_name = lastName;
        }

        const user = await userRepository.update(id, data);

        res.json({
            data: new User(user),
        });
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

exports.deleteCurrent = async (req, res) => {
    try {
        const id = req.user.id;
        await userRepository.delete(id);

        res.end();
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

// exports.create = async (req, res) => {};

exports.getCurrentUser = async (req, res) => {
    try {
        const user = req.user;

        res.json({
            data: new User(user),
        });
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const { firstName, lastName, email } = req.body;

        const data = {};

        if (firstName && firstName.trim() !== '') {
            data.first_name = firstName;
        }
        if (email && email.trim() !== '') {
            data.email = email;
        }

        if (lastName && lastName.trim() !== '') {
            data.last_name = lastName;
        }

        const user = await userRepository.update(id, data);

        res.json({
            data: new User(user),
        });
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

exports.updateToAdmin = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await userRepository.update(id, { is_admin: true });

        res.json({
            data: new User(user),
        });
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        await userRepository.delete(id);

        res.end();
    } catch (error) {
        res.json({
            data: {
                error: error.message,
            },
        });
    }
};
