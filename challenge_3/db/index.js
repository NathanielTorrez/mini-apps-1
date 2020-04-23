const mysql = require('mysql');
const config = require('./config.js');

var connection = mysql.createConnection(config);

var db = connection.connect( (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('mysql is connected')
  }
});

module.exports = connection
