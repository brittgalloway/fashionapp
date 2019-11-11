var db = require("../models");
var pants = require("../clothesJSON/pants.json");
var tops = require("../clothesJSON/tops.json");
var dresses = require("../clothesJSON/dresses.json");
var shoes = require("../clothesJSON/shoes.json");

module.exports = function(app) {
  // Get all queries for outfits

  // app.get("/api/all", function(req, res) {
  //   db.Tops.findAll({}).then(function(dbAll) {
  //     res.json(dbAll);
  //   });
  // });

  app.get("/api/all/tops", function(req, res) {
    db.Tops.findAll({}).then(function(dbTops) {
      res.json(dbTops);
    });
  });
  app.get("/api/all/pants", function(req, res) {
    db.Pants.findAll({}).then(function(dbPants) {
      res.json(dbPants);
    });
  });
  app.get("/api/all/dresses", function(req, res) {
    db.Dresses.findAll({}).then(function(dbDresses) {
      res.json(dbDresses);
    });
  });
  app.get("/api/all/shoes", function(req, res) {
    db.Shoes.findAll({}).then(function(dbShoes) {
      res.json(dbShoes);
    });
  });

  //Create new outfit
  app.post("api/closet", function(req, res) {
    db.Outfit.create({
      outfits: req.body.outfits,
      foreignkey: req.body.id
    }).then(function(dbOutfits) {
      res.json(dbOutfits);
    });
  });

  // Create a new comment
  app.post("/api/comments", function(req, res) {
    console.log("Someone made a comment! Look: ");
    console.log(req.body.comment);
    db.Comment.create({
      anon: req.body.anon,
      comment: req.body.comment,
      foreignkey: req.body.id
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  // Delete a comment by id
  app.delete("/api/comments/:id", function(req, res) {
    db.Comment.destroy({ where: { id: req.params.id } }).then(function(
      dbComment
    ) {
      res.json(dbComment);
    });

    //POST TOPS TO TOPS TABLE
    app.post("/api/tops", function(req, res) {
      var topsArr = [];
      for (var i = 0; i < tops.length; i++) {
        var results = tops[i].link;
        topsArr.push(results);
      }
      topsArr.forEach(function(top) {
        db.Tops.create({
          url: top
        });
      });
    });
    //POST BOTTOMS TO PANTS TABLE
    app.post("/api/bottoms", function(req, res) {
      var pantsArr = [];
      for (var i = 0; i < pants.length; i++) {
        var results = pants[i].link;
        pantsArr.push(results);
      }
      pantsArr.forEach(function(pant) {
        db.Pants.create({
          url: pant
        });
      });
    });
    //POST DRESSES TO DRESSES TABLE
    app.post("/api/dresses", function(req, res) {
      var dressesArr = [];
      for (var i = 0; i < dresses.length; i++) {
        var results = dresses[i].link;
        dressesArr.push(results);
      }
      dressesArr.forEach(function(dress) {
        db.Dresses.create({
          url: dress
        });
      });
    });
    //POST SHOES TO SHOES TABLE
    app.post("/api/shoes", function(req, res) {
      var shoesArr = [];
      for (var i = 0; i < shoes.length; i++) {
        var results = shoes[i].link;
        shoesArr.push(results);
      }
      shoesArr.forEach(function(shoe) {
        db.Shoes.create({
          url: shoe
        });
      });
    });
    // });
    // app.post("outfitsDB", function(req, res) {
    //   db.outfitsDB.create(req.body).then(function(dbOutfits) {
    //     res.json(pants.json);
    //   });
    // });

    // results.push(pantsArr);
  });
};