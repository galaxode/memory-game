var express = require('express');
var path = require('path');
var morgan = require('morgan');


var app = express();
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public/')));

var port = 8000;

app.listen(port, function() {
  console.log('Listening on port ', port);
});