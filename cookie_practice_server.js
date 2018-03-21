const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/cookies', function(req, res) {
  var thing1 = req.body.thing1;
  var thing2 = req.body.thing2;
  console.log("thing1 = " + thing1 + ", thing2 = " + thing2);
  res.end("yes");
});
app.listen(3000, function() {
  console.log("Started on Port 3000");
});
