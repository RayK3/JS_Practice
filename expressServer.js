var express = require("express");
var weather = require("./weatherDataCall.js");
var app = express();
app.get("/", function(req,res) {
	console.log('hello again');
	res.send("Hello world!");
	res.end();
});

app.get('https://api.darksky.net/forecast/355c9574914c83b28623931d0c693e32/50.4452,104.6189?exclude=currently,minutely,daily,alerts,flags', function(req, res) {
	console.log("this did something");
});

app.get('/weather', function(req, res) {
	res.send('You asked to see the weather?');
	var w = weather.weatherData();
	res.send(`${w}`);
	res.end();
});


app.listen(1337);
console.log('Server running at http://127.0.0.1:1337/');
