'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn('Galleries', 'itinerary', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Itineraries',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Galleries', 'itinerary', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Itineraries',
        key: 'id'
      }
    });
  }
};
