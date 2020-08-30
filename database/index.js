const { Router } = require("express");
const router = Router();
const path = require("path");
const { connection } = require("../config");

class Offer {
  static async getMain_info_home(el) {
    const sql = `SELECT * FROM home__hard_admin`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async getSubs(el) {
    const sql = `SELECT * FROM subscriptions`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async getSocials(el) {
    const sql = `SELECT * FROM socials`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
  static async getAdmins(el) {
    const sql = `SELECT * FROM admins`;
    return await connection
      .query(sql)
      .then(result => {
        console.log("Data post, saved");
        return result[0];
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }

}

module.exports.Offer = Offer;
