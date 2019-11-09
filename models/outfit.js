module.exports = function(sequelize, DataTypes) {
  var Outfit = sequelize.define("Outfit", {
    dresses: DataTypes.STRING,
    tops: DataTypes.STRING,
    pants: DataTypes.STRING,
    shoes: DataTypes.STRING
    
  });
  return Outfit;
};

// module.exports = function(sequelize, DataTypes) {
//   var Todo = sequelize.define("Todo", {
//     text: DataTypes.STRING,
//     complete: DataTypes.BOOLEAN
//   });
//   return Todo;
// };