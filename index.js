var express = require('express');

// Constants
var PORT = 9898;

// App
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
  res.send('Version: 2.1<br /><img width="200px" src="apple2.png" />');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
