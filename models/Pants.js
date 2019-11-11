module.exports = function(sequelize, DataTypes) {
  var Pants = sequelize.define("Pants", {
    url: DataTypes.STRING
  });
  return Pants;
};
