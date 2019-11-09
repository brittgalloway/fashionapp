module.exports = function(sequelize, DataTypes) {
  var Tops = sequelize.define("Tops", {
    url: DataTypes.STRING
  });
  return Tops;
};
