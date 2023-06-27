var exp=require('express');
var app=exp();


app.use(exp.static("images"));

app.get("/login", function(req,res){

    res.sendFile(__dirname + "/login_form.html");
    
})

app.get("*",function(req,res){
    res.write("INVALID URL");

})

app.listen(9000,function()
{
    console.log("Server Started at port 9000");
})