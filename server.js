var HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
const path= require("path");
const bodyParser = require("body-parser");
const multer = require("multer");
const { test } = require("media-typer");

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
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
app.get("/dashboard",function (req,res){
    res.sendFile(path.join(__dirname,"dashboard.html"));
})
app.post("/login",function(req,res){
 var username=req.body.username;
 var password=req.body.password;
 console.log(req.body.username);
 console.log(username);
 const noSpecial=/[!-\/:-@[-`{-~]/;
 //&& noSpecial.test(username)
 if (username!=null && password!=null && !noSpecial.test(username))
 {
 console.log("Your password is: " + password);
 console.log("Your username is: " + username);
 res.redirect('/dashboard');
 }
 else{
   // res.redirect('/login');
   console.log("apple");
   res.redirect('/login');
 }
 })
 app.post("/register",function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    var email=req.body.email;
    var firstName=req.body.firstName;
    var lastName=req.body.lastName;
    var phone=req.body.phone;
    var companyName=req.body.companyName;
    var address1=req.body.address1;
    var address2=req.body.address2;
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(firstName);
    console.log(lastName);
    console.log(phone);
    console.log(companyName);
    console.log(address1);
    console.log(address2);
    res.redirect('/dashboard')
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
/*app.use((req, res) => {
   res.redirect('/');
  });
*/
// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);

