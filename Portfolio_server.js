var https = require('https');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.type('text/html');
  res.write("<strong>It Worked!</strong>");
  res.end();
});

app.listen(1337, function () {
	console.log('Server running at http://127.0.0.1:1337/');
});
