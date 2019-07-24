var express = require('express');

// Constants
var PORT = 9898;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Version: 1.0\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
