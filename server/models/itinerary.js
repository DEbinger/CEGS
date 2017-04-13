'use strict';
module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define('Itinerary', {
    user: DataTypes.INTEGER,
    flight: DataTypes.INTEGER,
    hotel: DataTypes.INTEGER,
    car: DataTypes.INTEGER,
    gallery: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Itinerary.belongsTo(models.User, {foreignKey: 'user'});
        Itinerary.belongsTo(models.Flight, {foreignKey: 'flight'});
        Itinerary.belongsTo(models.Hotel, {foreignKey: 'hotel'});
        Itinerary.belongsTo(models.Car, {foreignKey: 'car'});
        Itinerary.belongsTo(models.Gallery, {foreignKey: 'gallery'});
      }
    }
  });
  return Itinerary;
};