'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // rename column
    queryInterface.renameColumn('Hotels', 'location', 'airport');

    // add columns
    queryInterface.addColumn('Hotels', 'hotelName', Sequelize.STRING);

    queryInterface.addColumn('Hotels', 'saleTotal', Sequelize.INTEGER);

    // remove column
    queryInterface.removeColumn('Hotels', 'amenity');

  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Hotels', 'location','airport');
    queryInterface.removeColumn('Hotels', 'hotelName');
    queryInterface.removeColumn('Hotels', 'saleTotal');
    queryInterface.removeColumn('Hotels', 'amenity');

  }
};
