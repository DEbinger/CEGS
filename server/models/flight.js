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
    refundable: DataTypes.BOOLEAN,
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