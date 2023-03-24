const mysql = require("mysql");

const db = mysql.createConnection({
    host: "login-practice.cbxlqdyao6h5.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "admin1234",
    database: "login_practice",
});

db.connect();

module.exports = db;