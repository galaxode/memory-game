var express = require('express');
var path = require('path');
var morgan = require('morgan');


var app = express();
app.use(morgan('dev'));

app.use(express.static('public'));
app.use('/compiled', express.static('./compiled'));


var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('Listening on port ', port);
});
