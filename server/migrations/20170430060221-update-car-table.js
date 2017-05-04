'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    // rename columns
    queryInterface.renameColumn('Cars', 'location', 'airport');
    queryInterface.renameColumn('Cars', 'vehicle', 'vehicle_type');

    // add columns
    queryInterface.addColumn('Cars', 'amount', Sequelize.INTEGER);

    queryInterface.addColumn('Cars', 'company_name', Sequelize.INTEGER);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Cars', 'location','airport');

    queryInterface.removeColumn('Cars', 'vehicle','vehicle_type');

    queryInterface.removeColumn('Cars', 'amount');

    queryInterface.removeColumn('Cars', 'company_name');
  }
};
