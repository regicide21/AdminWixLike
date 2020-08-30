const { Router } = require("express");
const router = Router();
const multer = require("multer");
const path = require("path");
const { connection } = require("../config");
const fs = require("fs");
var date_now = [];

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

router.post("/file", (req, res) => {
  upload(req, res, err => {
    console.log("Second", date_now);
    var date_ = date_now[0];
    const sql = `INSERT INTO products (date, name, price, description, category) VALUES ("${date_}","${req.body.name}", "${req.body.price}", "${req.body.description}", "${req.body.category}")`;
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
      text: "Product successfuly created",
      id: Date.now()
    };
    req.session.message.push(message_succes);
    res.redirect("/admin");
  });
});

router.post("/editor", (req, res) => {
  upload(req, res, err => {
    console.log("Second", date_now);
    var date_ = date_now[0];
    if (date_ === undefined) {
      console.log("undeg");
      var sql =
        "UPDATE `products` SET `name` = '" +
        req.body.name +
        "', `price` = '" +
        req.body.price +
        "', `description` = '" +
        req.body.description +
        "' WHERE `products`.`id` = " +
        req.body.id +
        ";";
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
        "UPDATE `products` SET `name` = '" +
        req.body.name +
        "', `price` = '" +
        req.body.price +
        "', `description` = '" +
        req.body.description +
        "', `date` = '" +
        date_ +
        "' WHERE `products`.`id` = " +
        req.body.id +
        ";";
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
    res.redirect("/admin");
  });
});

// "UPDATE `products` SET `name` = 'dfgrfg ', `price` = '456fdgf df', `description` = 'dfgg dfg ' WHERE `products`.`id` = 135";

module.exports = router;

// const { Router } = require('express');
// const router = Router();
// const multer = require('multer');
// const path = require('path');
// const { connection } = require("../config");

// const storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//         const url = "./uploads";
//         callback(null, url);
//     },
//     filename: function(req, file, cb) {
//         cb(null, Date.now() + ".png");
//         console.log(file)
//     }
// });

// const upload = multer({ storage: storage}).array("image");

// router.post("/file", (req, res) => {
//     upload(req, res, (err) => {
//         console.log(req.body);
//         console.log(req.files);
//         res.redirect('/admin');
//     });
// });

// module.exports = router;
