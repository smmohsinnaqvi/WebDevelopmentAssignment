var exp= require('express');
var app=exp();
var fs=require('fs');

app.use(function(req,res,next){
    fs.appendFile("log.text","request received at :" + new Date()+"\n URL : " + req.url+"\n",function(err){
        if(!err)
        console.log("SUCCESS")
        else
        console.log("FAILED");
    })
    next();
})

app.get("/home",function(req,res){

    res.send("Hello");
})

app.listen(9000,function(){
    console.log("Server Started at port 9000");
})