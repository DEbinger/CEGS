'use strict';
module.exports = function(sequelize, DataTypes) {
  var Car = sequelize.define('Car', {
    airport: DataTypes.STRING,
    pick_up: DataTypes.DATE,
    drop_off: DataTypes.DATE,
    vehicle_type: DataTypes.STRING,
    amount: DataTypes.STRING,
    company_name: DataTypes.STRING,
    itinerary: DataTypes.INTEGER,
    user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Car.hasMany(models.Itinerary);
        Car.belongsTo(models.User, {foreignKey: 'user'});
      }
    }
  });
  return Car;
};