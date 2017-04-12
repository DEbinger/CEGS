'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    security_question: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Flight);
        User.hasMany(models.Hotel);
        User.hasMany(models.Car);
        User.hasMany(models.Gallery);
      }
    }
  });
  return User;
};