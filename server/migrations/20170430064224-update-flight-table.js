'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Flights', 'date');

    queryInterface.addColumn('Flights', 'departureDate', Sequelize.DATE);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Flights', 'date');
    queryInterface.removeColumn('Flights', 'departureDate');
  }
};
