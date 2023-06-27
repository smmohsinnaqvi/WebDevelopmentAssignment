var exp=require('express');
var mysql=require('mysql2');
var app=exp();

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"dac"
});

con.connect(function(err){
    if(!err)
    console.log("Database connected");
    else
    console.log("Database Connection Failed");
})


app.use(exp.static("scripts"));
app.get("/form",function(req,res){
    res.sendFile(__dirname+"/form.html");
})

app.get("/getname",function(req,res){
    var eid= req.query.empid;
    con.query("select * from emp where empid="+eid,function(err,result){
        if(!err){
            str="<table border=1>"
            result.forEach(function(v){
                str+="<tr>";
                str+="<td>" + v.EMPNO + "</td>";
                str+="</tr>";
            })
            str+="</table>";
            res.send(str);
        }
    })

})

app.listen(9000,function(){
    console.log("Server started at port 9000");
});