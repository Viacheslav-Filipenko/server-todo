'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('Todos', 'toDate', Sequelize.DATE);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('Todos', 'toDate');
    },
};
