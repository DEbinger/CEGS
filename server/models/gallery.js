'use strict';
module.exports = function(sequelize, DataTypes) {
  var Gallery = sequelize.define('Gallery', {
    user: DataTypes.INTEGER,
    itinerary: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Gallery.belongsTo(models.User, {foreignKey: 'user'});
        Gallery.belongsTo(models.Itinerary, {foreignKey: 'itinerary'});
      }
    }
  });
  return Gallery;
};