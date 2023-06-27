var exp = require('express');
var app= exp();
var mysql = require('mysql2');

app.get("/greet", function(req,res){

    res.send("<h1> Welcome to Web App</h1>");
});

app.get("/login",function(req,res){
    res.sendFile(__dirname + "/login_form.html");
});

app.get("/logincheck",function(req,res){
    if(req.query.uid=='object' && req.query.pwd=='knowit')
    res.send("Login Successful");
    else
    res.send("Login Failed");

});

var con=mysql.createConnection({
    host:"localhost",
    user :"root",
    password:"root",
    database:"dac"
});

con.connect(function(err)
{
    if(!err)
     console.log("Connected");
    else
     console.log("Connection Failed");
    
});

app.get("/emp", function(req,res){

    con.query("select * from emp",function(err,data){
        res.write("<table border=1");
        if(!err)
        {
            
            data.forEach(function(v){
            res.write("<tr>");
            res.write("<td>" + v.EMPNO + "</td>");
            res.write("<td>" + v.ENAME + "</td>");
            res.write("<td>" + v.JOB + "</td>");
            res.write("<td>" + v.SAL + "</td>");
            res.write("</tr>");
            })
        }
        res.write("</table>");
        res.end();
    })
})

app.get("*",function(req,res){
    res.send("INVALID URL");
})

app.listen(9000,function()
{
    console.log("Server started at port 9000");
});

