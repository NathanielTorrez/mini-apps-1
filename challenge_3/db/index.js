const mysql = require('mysql');
const config = require('./config.js');

var connection = mysql.createconnection(config);

connection.connection( (error) => {
  if (error) {
    console.error(error)
  } else {
    console.log('mysql is connected')
  }
});

module.exports = connection
