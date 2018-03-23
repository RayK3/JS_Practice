const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

var app = express();

var calorieCounters = {};

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('../public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'Calorie_counter.html'));
});

app.get('/calorie_counter', function(req, res) {
  res.send(calorieCounters[req.query.id]);
});

app.post('/setGuid', function(req, res) {
  res.setHeader('content-type', 'text/json');
  calorieCounters[req.body.id] = req.body.calorieCounter;
  res.end();
});

app.listen(8000, function() {
  console.log('Server running at http://127.0.0.1:8000/');
});
