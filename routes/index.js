const { Router } = require("express");
const router = Router();
const { connection } = require("../config");
const { Offer } = require("../database");

router.get("/", (req, res) => {
  if (!req.session.message) {
    req.session.message = [];
  }
  Offer.getMain_info_home().then(item => {
    Offer.getSocials().then(item2 => {
      res.render("main_template", {
        title: "One page template",
        main_info__home: item[0],
        socials: item2[0],
        isAuth: req.session.isAuth,
        message: req.session.message[0]
      });
    });
  });
});



connection
  .query("SELECT * FROM products")
  .then(result => {
    console.log("---------------I am working shef--------------");
  })
  .catch(err => {
    console.log(err);
  });


module.exports = router;
