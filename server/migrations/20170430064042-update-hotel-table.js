'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Hotels', 'location');

    queryInterface.addColumn('Hotels', 'airport', Sequelize.STRING);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Hotels', 'location');
    queryInterface.removeColumn('Hotels', 'airport');
  }
};
