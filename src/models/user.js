'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            first_name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            is_admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {},
    );
    User.associate = function(models) {
        // associations can be defined here
    };
    return User;
};
