'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn('Itineraries', 'user', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });

    queryInterface.changeColumn('Itineraries', 'flight', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Flights',
        key: 'id'
      }
    });

    queryInterface.changeColumn('Itineraries', 'hotel', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Hotels',
        key: 'id'
      }
    });

    queryInterface.changeColumn('Itineraries', 'car', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cars',
        key: 'id'
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Itineraries', 'user', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    });

    queryInterface.removeColumn('Itineraries', 'flight', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Flights',
        key: 'id'
      }
    });

    queryInterface.removeColumn('Itineraries', 'hotel', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Hotels',
        key: 'id'
      }
    });

    queryInterface.removeColumn('Itineraries', 'car', 
    {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cars',
        key: 'id'
      }
    });
  }
};
