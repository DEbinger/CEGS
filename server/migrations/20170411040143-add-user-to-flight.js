'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    queryInterface.addColumn('Flights', 'user', 
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Flights",
          key: "user"
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */

    queryInterface.removeColumn('Flights', 'user',
      {
        type: Sequelize.INTEGER,
        references: {
          model: "Flights",
          key: "user"
        }
      });
  }
};
