var db = require("../models");
var pants = require("../pants.json");
var dresses = require("../Dresses.json");

module.exports = function(app) {
  //only loads bottoms:pants, skirts, shorts on browse page
  // app.get("/bottoms", function(req, res) {
  //   db.outfitsDB
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(outfitsDB) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  // });
  // //tops
  // app.get("tops", function(req, res) {
  //   db.outfitsDB
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(outfitsDB) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  // });
  // //only loads dresses on browse page
  // app.get("/dresses", function(req, res) {
  //   db.outfitsDB
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(outfitsDB) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  // });
  //only loads shoes on browse page
  // app.get("/shoes", function(req, res) {
  //   db.outfitsDB
  //     .findOne({ where: { id: req.params.id } })
  //     .then(function(outfitsDB) {
  //       res.render("example", {
  //         example: dbExample
  //       });
  //     });
  // });

  // // Create a new example
  // app.post("outfitsDB", function(req, res) {
  //   db.outfitsDB.create(req.body).then(function(dbExample) {
  //     res.json(pants.json);
  //   });
  // });

  app.get("/pants", function(req, res) {
    // db.outfitsDB.create(req.body).then(function() {

    var pantsArr = [];
    for (var i = 0; i < pants.length; i++) {
      var results2 = pants[i].link;
      pantsArr.push(results2);
    }
    // results.push(pantsArr);
    res.json(pantsArr);
  });

  app.get("/dresses", function(req, res) {
    // db.outfitsDB.create(req.body).then(function() {

    var dressesArr = [];
    for (var i = 0; i < dresses.length; i++) {
      var results3 = dresses[i].link;
      dressesArr.push(results3);
    }
    // results.push(pantsArr);

    res.json(dressesArr);
  });


};
