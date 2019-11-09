var db = require("../models");

module.exports = function(app) {
  // Load index page/home

  app.get("/index", function(req, res) {
    res.render("index", data);

  });
  app.get("/browse", function(req, res) {
    db.outfitsDB
      .findOne({ where: { id: req.params.id } })
      .then(function(outfitsDB) {
        res.render("browse", {
          example: outfitsDB
        });
      });
  });
  app.get("/closer", function(req, res) {
    res.render("closet", data);
  });
  app.get("/outfits", function(req, res) {
    res.render("outfits", data);
  });
  // Render 404 page
  app.get("*", function(req, res) {
    res.render("404");
  });
};
