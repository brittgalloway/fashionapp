var db = require("../models");
var pants = require("../pants.json");

module.exports = function(app) {
  //only loads bottoms:pants, skirts, shorts on browse page
  app.get("/bottoms", function(req, res) {
    db.outfitsDB
      .findOne({ where: { id: req.params.id } })
      .then(function(outfitsDB) {
        res.render("example", {
          example: dbExample
        });
      });
  });
  //tops
  app.get("tops", function(req, res) {
    db.outfitsDB
      .findOne({ where: { id: req.params.id } })
      .then(function(outfitsDB) {
        res.render("example", {
          example: dbExample
        });
      });
  });
  //only loads dresses on browse page
  app.get("/dresses", function(req, res) {
    db.outfitsDB
      .findOne({ where: { id: req.params.id } })
      .then(function(outfitsDB) {
        res.render("example", {
          example: dbExample
        });
      });
  });
  //only loads shoes on browse page
  app.get("/shoes", function(req, res) {
    db.outfitsDB
      .findOne({ where: { id: req.params.id } })
      .then(function(outfitsDB) {
        res.render("example", {
          example: dbExample
        });
      });
  });

  // Create a new example
  app.post("outfitsDB", function(req, res) {
    db.outfitsDB.create(req.body).then(function(dbExample) {
      res.json(pants.json);
    });
  });

  app.get("/", function(req, res) {
    console.log("get");
   
    res.json(pants[0].link);
  });
  // });
};
// app.post("outfitsDB", function(req, res) {
//   db.outfitsDB.create(req.body).then(function(dbOutfits) {
//     res.json(pants.json);
//   });
// });