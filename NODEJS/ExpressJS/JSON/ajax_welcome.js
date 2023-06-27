var exp=require('express');
var mysql=require('mysql2');
var bp=require('body-parser');

var app=exp();
app.use(bp.urlencoded({extended:false}));

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dac"
});

con.connect(function(err){
    if(!err)
    console.log("Database Connected")
    else
    console.log("Database Not Connected")
});



app.get('/form',function(req,res){
    res.sendFile(__dirname+"/ajax_welcome.html");
});

app.post('/greet', function(req,res){
    var eno=req.body.empno;
    con.query("select * from emp where empno="+eno,function(err,result){
        if(!err)
        {
            console.log(result);
            res.send(JSON.stringify(result));

        }
    })

})

app.listen(9000,function(){
    console.log("Server started at port 9000");
})