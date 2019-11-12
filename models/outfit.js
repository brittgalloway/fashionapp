module.exports = function(sequelize, DataTypes) {
  var Outfit = sequelize.define("Outfit", {
    dresses: DataTypes.STRING,
    tops: DataTypes.STRING,
    pants: DataTypes.STRING,
    shoes: DataTypes.STRING
    
  });
  return Outfit;
};

// // var Sequelize = require('sequelize');
// // var sequelize = require('../models/outfit.js');

// module.exports = function(sequelize, DataTypes) {
//   var Outfit = sequelize.define("Outfit", {
//     dresses: DataTypes.STRING,
//     tops: DataTypes.STRING,
//     pants: DataTypes.STRING,
//     shoes: DataTypes.STRING
//   });
//   return Outfit;
// };

// const Sequelize = require('sequelize'); 

// const sequelize = new Sequelize( {
//   host: "localhost",
//   port: 3306,
//   dialect: "mysql",
//   define: {
//     underscored: true
//   }
// });

// // Connect all the models/tables in the database to a db object, 
// //so everything is accessible via one object
// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.dresses = require('../models/dresses.js')(sequelize, Sequelize);
// db.pants = require('../models/pants.js')(sequelize, Sequelize);
// db.shoes = require('../models/shoes.js')(sequelize, Sequelize);
// db.tops = require('../models/tops.js')(sequelize, Sequelize);
// db.comments = require('../models/comments.js')(sequelize, Sequelize);

// //Relations
// //db.dresses.belongsTo(db.Outfit);
// // db.pants.belongsTo(db.Outfit);
// db.shoes.belongsTo(db.Outfit);
// // db.tops.belongsTo(db.Outfit);

// //db.Outfit.hasOne(db.pants);

// module.exports = db;
