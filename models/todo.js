'use strict';
module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        'Todo',
        {
            description: DataTypes.STRING,
            completed: DataTypes.BOOLEAN,
            toDate: DataTypes.DATE
        },
        {},
    );
    Todo.associate = function(models) {
        // associations can be defined here
    };
    return Todo;
};
