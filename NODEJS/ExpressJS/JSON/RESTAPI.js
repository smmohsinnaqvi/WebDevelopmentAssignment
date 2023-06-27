var exp = require('express');
var mysql= require('mysql2');
var bp=require('body-parser');
var cors=require('cors');
var app=exp();

app.use(bp.urlencoded({extended:false}));
app.use(cors());
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dac"
});

con.connect(function(err){
    if(!err)
    console.log("Database Connected")
    else
    console.log("Database Not Connected");
});

app.get('/form',function(req,res){
    res.sendFile(__dirname + "/form.html");
});

app.post('/getemps',function(req,res){
    var dno=req.body.deptno;
    con.query("select * from emp where deptno="+dno,function(err,result){
        // if(!err)
        // {
        //     res.send(JSON.stringify(result));
        // }
        res.send(JSON.stringify(result));

    })
})

app.listen(9000,function(){
    console.log("Server started at port 9000");
})

