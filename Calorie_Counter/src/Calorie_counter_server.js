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
  fs.readFile('./calorie_counters.txt', function read(err, data) {
    if (err) {
      throw err;
    }
    content = data;
    processFile();
  });

  function processFile() {
    var content = JSON.parse(content);
    res.send(content[req.query.id]);
  }
});

app.post('/setGuid', function(req, res) {
  fs.stat('./calorie_counters.txt', function(err, stat) {
    if (err == null) {
      fs.readFile('./calorie_counters.txt', function read(err, data) {
        if (err) {
          throw err;
        }
        content = data;
        processFile();
      });

      function processFile() {
        var content = JSON.parse(content);
        content[req.body.id] = req.body.calorieCounter;
        content = JSON.stringify(content);
        fs.writeFile('./calorie_counters.txt', content, function (err) {
          if (err) throw err;
          console.log('The file has been saved');
        });
      }
    } else if(err.code == 'ENOENT') {
      var obj = {};
      obj[req.body.id] = req.body.calorieCounter;
      console.log('File does not exist');
      fs.writeFile('./calorie_counters.txt', JSON.stringify(obj), function (err) {
        if (err) throw err;
        console.log('The file has been saved');
      });
    } else {
      console.log('Some other error: ', err.code);
    }
  })
  res.end();
});

app.listen(8000, function() {
  console.log('Server running at http://127.0.0.1:8000/');
});
