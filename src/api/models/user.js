'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Listing, {
          foreignKey: 'userId',
          as: 'lists',
        });
      }
    }
  });
  return User;
};