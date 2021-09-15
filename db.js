var mysql = require("mysql");
var { db } = require("./config.js");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: db.password,
  database: "spaceForce",
});
