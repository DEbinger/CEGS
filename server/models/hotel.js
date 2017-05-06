'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hotel = sequelize.define('Hotel', {
    airport: DataTypes.STRING,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    saleTotal: DataTypes.STRING,
    hotelName: DataTypes.STRING,
    itinerary: DataTypes.INTEGER,
    user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Hotel.hasMany(models.Itinerary);
        Hotel.belongsTo(models.User, {foreignKey: 'user'});
      }
    }
  });
  return Hotel;
};