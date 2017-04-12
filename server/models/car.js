'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    location: DataTypes.STRING,
    pick_up: DataTypes.DATE,
    drop_off: DataTypes.DATE,
    vehicle: DataTypes.STRING,
    itinerary: DataTypes.INTEGER,
    user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Hotel.belongsTo(models.User, {foreignKey: 'user'});
      }
    }
  });
  return Car;
};