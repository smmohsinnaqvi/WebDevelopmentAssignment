var exp= require('express');
var app=exp();

app.use(exp.static("pages"));
app.use(exp.static("images"));
app.use(exp.static("styles"));

app.get("/login",function(req,res){

    res.sendFile(__dirname+"/pages/third.html");

});

app.listen(9000,function(){
    console.log("Server started at port 9000");
})