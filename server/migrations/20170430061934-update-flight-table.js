'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    // remove columns
    queryInterface.removeColumn('Flights', 'adultCount');
    queryInterface.removeColumn('Flights', 'infantInLapCount');
    queryInterface.removeColumn('Flights', 'infantInSeatCount');
    queryInterface.removeColumn('Flights', 'childCount');
    queryInterface.removeColumn('Flights', 'seniorCount');
    queryInterface.removeColumn('Flights', 'refundable');

    // add columns
    queryInterface.addColumn('Flights', 'saleTotal', Sequelize.INTEGER);
    queryInterface.addColumn('Flights', 'returnDate', Sequelize.DATE);

    // rename column
    queryInterface.renameColumn('Flights', 'date', 'departureDate');


  },

  down: function (queryInterface, Sequelize) {

    queryInterface.removeColumn('Flights', 'adultCount');
    queryInterface.removeColumn('Flights', 'infantInLapCount');
    queryInterface.removeColumn('Flights', 'infantInSeatCount');
    queryInterface.removeColumn('Flights', 'childCount');
    queryInterface.removeColumn('Flights', 'seniorCount');
    queryInterface.removeColumn('Flights', 'refundable');
    queryInterface.removeColumn('Flights', 'saleTotal');
    queryInterface.removeColumn('Flights', 'returnDate');
    queryInterface.removeColumn('Flights', 'date', 'departureDate');

  }
};
