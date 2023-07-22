const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/index", (req, res) => {
  res.render("index");
});


router.get("/connexion/", (req, res) => {
  res.render("connexion");
});

router.get("/cv", (req, res) => {
  res.render("cv");
});

//  router.get("/library", (req, res) => {
//      res.render("library");
//   });

// FIN
module.exports = router;
