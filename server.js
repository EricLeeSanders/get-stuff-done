var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.set('views', path.join(__dirname, 'dist/index.html'));

app.get('/', (req, res) => {
  res.render('index');
});


var port = process.env.PORT || '3000';
app.set('port', port);

app.listen(process.env.PORT, process.env.IP, function() {
  console.log('Server is listening...');
});