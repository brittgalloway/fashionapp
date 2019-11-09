"use strict";
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    anon: {
      type: DataTypes.STRING,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    foreignkey: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Comment;
};
