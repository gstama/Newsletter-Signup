const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const https = require('https');
<<<<<<< HEAD
=======
const config = require('./config');
>>>>>>> 7ed0ddf88f879ec4e40fba63a389a3a3d0a49c72

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
  const newSubscriber = {
    members: [
      {
        email_address: req.body.inputEmail,
        status: 'subscribed',
        merge_fields: {
          FNAME: req.body.inputFirstName,
          LNAME: req.body.inputLastName,
        },
      },
    ],
  };

  const options = {
    method: 'POST',
<<<<<<< HEAD
    auth: 'gstama:' + process.env.KEY,
  };

  const request = https.request(process.env.url, options, (response) => {
=======
    auth: 'gstama:' + config.key,
  };

  const request = https.request(config.url, options, (response) => {
>>>>>>> 7ed0ddf88f879ec4e40fba63a389a3a3d0a49c72
    if (response.statusCode === 200) {
      res.sendFile(__dirname + '/success.html');
    } else {
      res.sendFile(__dirname + '/failure.html');
    }
    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });

  request.write(JSON.stringify(newSubscriber));
  request.end();
});

app.post('/failure', (req, res, next) => {
  res.redirect('/');
});

app.post('/success', (req, res, next) => {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running!');
});
