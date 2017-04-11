'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn('Flights', 'user', Sequelize.INTEGER);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Flights', 'user', Sequelize.INTEGER);
  }
};
