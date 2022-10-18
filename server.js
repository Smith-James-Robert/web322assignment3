var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path= require("path");
//Yes its bad, but I don't have another 5 hours to make it good and Its unreasonable for it to have taken as long as it has already.

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.redirect('/blog');
    //res.send("Hello World!");
});
app.get("/registration", function(req,res){
    res.sendFile(path.join(__dirname,"registration.html"));
})
app.get("/blog", function(req,res){
    res.sendFile(path.join(__dirname,"blog.html"));
})     
/* 
app.get("/article/:id", function(req,res){
    res.sendFile(path.join(__dirname,"read_more.html"));
})
*/
app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"login.html"));
})
app.get("/iconsmall.png",function(req,res){
    res.sendFile(path.join(__dirname,"icon.png"));
})
app.get("/twitter",function(req,res){
    res.sendFile(path.join(__dirname,"Tweeter.png"));
})
app.get("/article/1",function(req,res){
    res.sendFile(path.join(__dirname,"article1.html"));
})
app.get("/article/2",function(req,res){
    res.sendFile(path.join(__dirname,"article2.html"));
})
app.get("/article/3",function(req,res){
    res.sendFile(path.join(__dirname,"article3.html"));
})
app.use((req, res) => {
   res.redirect('/');
  });
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

