const mysql = require("mysql2/promise");
const { settings } = require("./env");

const pool = mysql.createPool({
  ...settings.mysql,
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = { pool };
