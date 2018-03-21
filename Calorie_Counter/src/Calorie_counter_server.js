const https = require('https');
const express = require('express');
const path = require('path');

var app = express();

app.use(express.static('../public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public', 'Calorie_counter.html'));
});

app.listen(8000, function() {
  console.log('Server running at http://127.0.0.1:8000/');
});
