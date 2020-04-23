const express = require('express');
const app = express();
const port = 3000;
const {sendToDb} = require('./controller.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static('public'));

app.post('/', sendToDb )

app.listen(port, (success) => {console.log('port is listing on ' + port)} )