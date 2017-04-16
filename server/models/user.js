'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    securityQuestion: DataTypes.STRING,
    securityAnswer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Flight);
        User.hasMany(models.Hotel);
        User.hasMany(models.Car);
        User.hasMany(models.Gallery);
        User.hasMany(models.Itinerary);
      }
    }
  });
  return User;
};