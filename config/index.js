const mysql = require("mysql2");
const nodemailer = require("nodemailer");


module.exports.connection = mysql.createConnection({
    host: "db4free.net",
    user: "user_376",
    database: "db_376",
    password: "somebody376"
}).promise();


module.exports.transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "HEREWASMYEMAIL@gmail.com",
        pass: "Created By Roman Chervinskyy"
    },
    tls: {
        rejectUnauthorized: false
    }
});