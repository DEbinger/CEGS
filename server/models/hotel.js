'use strict';
module.exports = function(sequelize, DataTypes) {
  var Hotel = sequelize.define('Hotel', {
    location: DataTypes.STRING,
    check_in: DataTypes.DATE,
    check_out: DataTypes.DATE,
    amenity: DataTypes.STRING,
    itinerary: DataTypes.INTEGER,
    user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Hotel.belongsTo(models.User, {foreignKey: 'user'});
      }
    }
  });
  return Hotel;
};