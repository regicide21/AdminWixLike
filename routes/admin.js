const { Router } = require("express");
const router = Router();
// const { Offer } = require("../database");
const { connection } = require("../config");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
var date_now = [];
const { Offer } = require("../database");


// router.get("/admin", (req, res) => {
//   console.log("---S---", req.session.message);
//   if (req.session.isAuth == true) {
//     res.render("admin", {
//       title: "Admin",
//       message: req.session.message[0]
//     });
//   } else {
//     res.redirect("/login");
//   }
// });

router.get("/admin", (req, res) => {
  if (!req.session.message) {
    req.session.message = [];
  }
  console.log("---S---", req.session);
  if (req.session.isAuth == true) {
    Offer.getMain_info_home().then(item => {
      Offer.getSocials().then(item2 => {
        res.render("admin", {
          title: "Admin",
          main_info__home: item[0],
          socials: item2[0],
          isAuth: req.session.isAuth,
          message: req.session.message[0]
        });
      });
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/instruction", (req, res) => {
  if (!req.session.message) {
    req.session.message = [];
  }
  if (req.session.isAuth == true) {
    Offer.getMain_info_home().then(item => {
        res.render("instruction", {
        title: "Instruction",
        main_info__home: item[0],
        isAuth: req.session.isAuth,
        message: req.session.message[0]
    });
  });
  } else {
    res.redirect("/login");
  }
});

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    const url = "./public/uploads";
    callback(null, url);
  },
  filename: function(req, file, cb) {
    var date_now_beta = Date.now();
    cb(null, date_now_beta + ".png");
    date_now.push(date_now_beta);
    console.log("Date now is:", date_now);
  }
});

const upload = multer({ storage: storage }).array("image");

router.post("/editor", (req, res) => {
  upload(req, res, err => {
    console.log('BEFOREEEEEEE',req.body)
    console.log("Second", date_now);
    var date_ = date_now[0];
    if (date_ === undefined) {
      console.log("undeg");
      var sql =
        "UPDATE `home__hard_admin` SET `main_name` = '" +
        req.body.main_name +
        "', `main_tag` = '" +
        req.body.main_tag +
        "', `main_description` = '" +
        req.body.main_description +
        "' WHERE `home__hard_admin`.`id` = 1;";
    } else {
      console.log("DEG");

      var file = "./public/uploads/" + req.body.date + ".png";
      fs.unlink(file, err => {
        if (err) {
          console.error(err);
          return;
        }
        //file removed
      });
      var sql =
        "UPDATE `home__hard_admin` SET `main_name` = '" +
        req.body.main_name +
        "', `main_tag` = '" +
        req.body.main_tag +
        "', `image` = '" +
        date_ +
        "', `main_description` = '" +
        req.body.main_description +
        "' WHERE `home__hard_admin`.`id` = 1;";

    }
    console.log(sql);
    date_now.length = 0;
    connection
      .query(sql)
      .then(result => {
        console.log(result[0]);
      })
      .catch(err => {
        console.log(err);
      });
    let message_succes = {
      text: "Product successfuly edited",
      id: Date.now()
    };
    req.session.message.push(message_succes);
    var sql2 =
        "UPDATE `socials` SET `twitter` = '" +
        req.body.twitter +
        "', `instagram` = '" +
        req.body.instagram +
        "', `linkedin` = '" +
        req.body.linkedin +
        "', `facebook` = '" +
        req.body.facebook +
        "' WHERE `socials`.`id` = 1;";
      console.log(sql2)
    connection
    .query(sql2)
    .then(result => {
      console.log(result[0]);
    })
    .catch(err => {
      console.log(err);
    });
    res.redirect("/admin");
  });
});

module.exports = router;
