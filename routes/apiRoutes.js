var db = require("../models");

module.exports = function(app) {
  // Get all clothes
  app.get("/api/browse", function(req, res) {
    db.Outfit.findAll({}).then(function(dbOutfits) {
      res.json(dbOutfits);
    });
  });
  //only loads tops/shirts on browse page
  app.get("/tops", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //only loads bottoms:pants, skirts, shorts on browse page
  app.get("/bottoms", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //only loads dresses on browse page
  app.get("/dresses", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //only loads shoes on browse page
  app.get("/shoes", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  //   // Create a new example
  //   app.post("/api/examples", function(req, res) {
  //     db.Example.create(req.body).then(function(dbExample) {
  //       res.json(dbExample);
  //     });
  //   });

  //   // Delete an example by id
  //   app.delete("/api/examples/:id", function(req, res) {
  //     db.Example.destroy({ where: { id: req.params.id } }).then(function(
  //       dbExample
  //     ) {
  //       res.json(dbExample);
  //     });
  //   });
};
app.get("/", function(req, res) {
  console.log("get");
  // db.outfitsDB.create(req.body).then(function() {
  var results = pants[i].link;

  for (let i = 0; i < results.length; i++) {
    var ClothesDiv = $("<div>");
    var Clotheimage = $("<img>");
    Clotheimage.attr("src", results[i].link);

    ClothesDiv.append(Clotheimage);

    $("#imagespants").append(Clotheimage);
  }

  res.json(pants[0].link);
});
// });
};

app.post("outfitsDB", function(req, res) {
  db.outfitsDB.create(req.body).then(function(dbOutfits) {
    res.json(pants);
  });
});