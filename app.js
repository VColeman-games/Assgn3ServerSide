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





app.get('/',  function(req, res){


 res.render('index');
});

app.post('/getComic', function (req, res){
fetch('https://xkcd.com/info.0.json')
.then(function(res){  res.json()
})

.then(function(data) {
    let output ='<h2>Comics</h2>';
    data => {
        output +=
         `<div>
                <h1> User ID: ${data.title} </h1>
                <be>
                    <h4>${data.month} "/" ${data.day} "/" ${data.year}</h4>
                    <div class="d-flex justify-content-center"> <img src = ${img}></div>
            </div>`;
            document.getElementById('content').innerHTML = output;
    };

})
res.render('index');
});



app.get('/random', function(req, res){
    res.render('random.ejs');

});


http.createServer(app).listen(port, function(){

});

