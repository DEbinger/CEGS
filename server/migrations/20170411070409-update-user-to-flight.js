'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn('Flights', 'user',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Flights', 'user',
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });
  }
};
