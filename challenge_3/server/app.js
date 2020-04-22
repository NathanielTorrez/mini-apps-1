const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js')


app.use(express.static('public'));


app.listen(port, (success) => {console.log('port is listing on ' + port)} )