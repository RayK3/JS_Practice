const https = require('https');
const express = require('express');

var app = express();
var data = '';
https.get('https://api.darksky.net/forecast/355c9574914c83b28623931d0c693e32/50.4452,104.6189?exclude=currently,minutely,daily,alerts,flags',
 					(resp) => {

	resp.on('data', (chunk) => {
		data += chunk;
	});

}).on('error', (err) => {
	console.log("Error: " + err.message);
});

app.get('/weather', function(req, res) {
  console.log('Calling API');
  https.get('https://api.darksky.net/forecast/355c9574914c83b28623931d0c693e32/50.4452,104.6189?exclude=currently,minutely,daily,alerts,flags',
   					(resp) => {

  	resp.on('data', (chunk) => {
  		data += chunk;
  	});

  }).on('error', (err) => {
  	console.log("Error: " + err.message);
  });


	res.send(data);
});

app.get('/graphs', function(req, res) {
  res.sendFile('C:/Users/wowfactor-acer/Workspace/JS_Practice/Node_API_Access_Practice.html');
});

app.listen(1337, function () {
	console.log('Server running at http://127.0.0.1:1337/');
});
