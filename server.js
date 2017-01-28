var express = require('express');
var app = express();
var path = require('path');
var urlJSON = require('./data/crm.json')

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
    res.redirect("/home");
})

app.get("/home", function(req, res){
	res.sendFile(path.join(__dirname, '/public', 'index.html'));
})

app.get("/data", function(req, res){
    res.send(urlJSON);
})

app.listen(1340, function () {
  console.log('Example app listening on port 1340!');
});
