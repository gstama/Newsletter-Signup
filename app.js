const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res, next) => {
  console.log(req.body.inputFirstName);
  console.log(req.body.inputLastName);
  console.log(req.body.inputEmail);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
