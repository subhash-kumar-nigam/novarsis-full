const mysql = require("mysql2");
const dbConfig = require("./dbConfig");

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database
});

connection.connect(err => {
  if (err) console.log("❌ Connection error:", err);
  else console.log("✅ Connected to MySQL!");
});
