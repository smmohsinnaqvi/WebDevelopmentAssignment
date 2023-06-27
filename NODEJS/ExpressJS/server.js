var exp=require("express")
var mysql=require("mysql2")
var bp=require("body-parser")
var app=exp();

app.use(bp.urlencoded({extended:true}))
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dac"

}

)
con.connect(function(err){
    if(!err)
    {
        console.log("database connected")
    }
    else
    {
        console.log("ERRROR")
    }
})



app.get('/S',function(req,res){
    res.sendFile(__dirname+'/sS.html')
});
app.get('/getName',function(req,res){
    var dept=req.query.deptno
    con.query('select * from dept where deptno='+dept,function(err,data){
        if(!err){
console.log(data)
        res.send(data)
        }
    })  
})

app.listen(9000,function(){console.log("hello")})