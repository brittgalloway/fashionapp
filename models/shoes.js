module.exports = function(sequelize, DataTypes) {
  var Shoes = sequelize.define("Shoes", {
    url: DataTypes.STRING
  });
  return Shoes;
};
