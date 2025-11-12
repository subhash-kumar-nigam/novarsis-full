const mysql = require("mysql2");
const dbConfig = require("./dbConfig");

const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port || 3306, // ✅ yahan add karo
});

connection.connect(err => {
  if (err) console.log("❌ Connection error:", err);
  else console.log("✅ Connected to Railway MySQL database!");
});

module.exports = connection; // ✅ ye bhi add karo agar export nahi kiya hai
