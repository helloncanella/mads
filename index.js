'use strict';

var express = require('express');
var app = express();

var http = require('http').Server(app);

app.use(express.static(__dirname));

app.get('/', function(req,res){
  res.sendFile('index.html');
});


http.listen(process.env.PORT || 5000);
