'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    location: DataTypes.STRING,
    pick_up: DataTypes.DATE,
    drop_off: DataTypes.DATE,
    vehicle: DataTypes.STRING,
    itinerary: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Car;
};