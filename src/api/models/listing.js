'use strict';
module.exports = (sequelize, DataTypes) => {
  var Listing = sequelize.define('Listing', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.User, {
          foreignKey: 'userId',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return Listing;
};