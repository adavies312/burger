var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    // If on Heroku and JawsDB is present, use this
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
  });
}
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;
  