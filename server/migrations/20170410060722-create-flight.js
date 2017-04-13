'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.STRING
      },
      destination: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      adultCount: {
        type: Sequelize.INTEGER
      },
      infantInLapCount: {
        type: Sequelize.INTEGER
      },
      infantInSeatCount: {
        type: Sequelize.INTEGER
      },
      childCount: {
        type: Sequelize.INTEGER
      },
      seniorCount: {
        type: Sequelize.INTEGER
      },
      refundable: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Flights');
  }
};