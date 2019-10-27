var http = require('http');
var path = require('path');
const express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: false}));

app.get('/', function(req, res){
    res.render('index', {page:'Home', menuId:'home'})


});

app.post('/random', function(req, res){
    res.render('random.ejs');

});

http.createServer(app).listen(port, function(){

});