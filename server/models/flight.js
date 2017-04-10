'use strict';
module.exports = function(sequelize, DataTypes) {
  var Flight = sequelize.define('Flight', {
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    date: DataTypes.DATE,
    adultCount: DataTypes.INTEGER,
    infantInLapCount: DataTypes.INTEGER,
    infantInSeatCount: DataTypes.INTEGER,
    childCount: DataTypes.INTEGER,
    seniorCount: DataTypes.INTEGER,
    refundable: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Flight;
};