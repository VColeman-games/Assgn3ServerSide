var http = require('http');
var path = require('path');
const express = require("express");
var bodyParser = require("body-parser");
const fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ encoded: false}));

var ComicImg = "";
var ComicTitle = "";
var ComicMonth = "";
var ComicDay = "";
var ComicYear = "";
var ComicNumber = Math.floor((Math.random() * 2230) + 1);


app.get('/',  function(req, res){
fetch('https://xkcd.com/info.0.json')
.then(res => res.json())
.then(data => {
     ComicTitle = data.title;
     ComicMonth = data.month;
     ComicDay = data.day;
     ComicYear = data.year;
     ComicImg = data.img;
     

    

});


res.render('index', {ComicImg: ComicImg, ComicTitle: ComicTitle, ComicMonth: ComicMonth, ComicDay: ComicDay, ComicYear: ComicYear });
});







app.get('/random', function(req, res){
  var random = Math.floor((Math.random() * ComicNumber) + 1);  
  console.log(random);
fetch('https://xkcd.com/' + random + '/info.0.json')
.then(res => res.json())
.then(data => {
     ComicTitle = data.title;
     ComicMonth = data.month;
     ComicDay = data.day;
     ComicYear = data.year;
     ComicImg = data.img;
     

    

});




    res.render('random.ejs', {ComicImg: ComicImg, ComicTitle: ComicTitle, ComicMonth: ComicMonth, ComicDay: ComicDay, ComicYear: ComicYear });

});

app.get('/update', function(req, res){
  var random = Math.floor((Math.random() * ComicNumber) + 1);  
  console.log(random);
fetch('https://xkcd.com/' + random + '/info.0.json')
.then(res => res.json())
.then(data => {
     ComicTitle = data.title;
     ComicMonth = data.month;
     ComicDay = data.day;
     ComicYear = data.year;
     ComicImg = data.img;
     

    

});




    res.render('random.ejs', {ComicImg: ComicImg, ComicTitle: ComicTitle, ComicMonth: ComicMonth, ComicDay: ComicDay, ComicYear: ComicYear });

});


http.createServer(app).listen(port, function(){

});

