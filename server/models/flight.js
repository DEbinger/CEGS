'use strict';
module.exports = function(sequelize, DataTypes) {
  var Flight = sequelize.define('Flight', {
    origin: DataTypes.STRING,
    destination: DataTypes.STRING,
    departureDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    saleTotal: DataTypes.INTEGER,
    user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Flight.hasMany(models.Itinerary);
        Flight.belongsTo(models.User, {foreignKey: 'user'});
      }
    }
  });
  return Flight;
};