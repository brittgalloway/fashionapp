"use strict";
module.exports = function(sequelize, DataTypes) {
  var Closet = sequelize.define("Closet", {
    oufits: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foreignkey: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Closet;
};
