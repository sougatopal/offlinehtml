var express = require("express");
var app =express();
var bodyParser = require("body-parser");

//var sampleJson={"nmon":"2"};

app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
var options = {
    root: __dirname,
        headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };


app.get("/",function(req,res){
	res.sendFile('index_offline.html',options);
    console.log("file sent");
}).post("/api",function(req,res){
    console.log(req.body);
    res.send("data recieved sucessfully");

}).listen(3000);