const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


app.post('/cookies', function(req, res) {
  res.setHeader('content-type', 'text/plain');
  if(!req.body.id) {
    console.log(req.body.id);
    res.send("id=" + guid());
  }
  res.end();

});
app.listen(3000, function() {
  console.log("Started on Port 3000");
});
