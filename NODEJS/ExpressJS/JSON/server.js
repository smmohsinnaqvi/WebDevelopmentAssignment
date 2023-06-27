var exp = require('express');
var mysql= require('mysql2');
var bp=require('body-parser');
var cors=require('cors')
var app=exp();

app.use(cors());
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

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

// app.post('/getemps',function(req,res){
//     var dno=req.body.deptno;
//     con.query("select * from emp where deptno="+dno,function(err,result){
//         if(!err)
//         {
//             res.send(JSON.stringify(result));
//         }

//     })
// })

    app.get('/getemps' ,function(req,res){
        con.query("select * from emp", function(err,data)
        {
            if(!err)
            {
                res.json(data);
            }
        })
    });

    app.post('/insertemp',function(req,res){
        var empid= req.body.empid;
        var ename= req.body.ename;
        var job= req.body.job;
        var deptno= req.body.deptno;

        var query="insert into emp(EMPNO,ENAME,JOB,DEPTNO) values(?,?,?,?)";
        con.query(query,[empid,ename,job,deptno],function(err){
            if(!err)
            res.send("Insertion successful")
            else
            res.send("Insertion Failed")
        })

    });

    app.post('/update',function(req,res)
    {
        var empid=req.body.empid;
        var email=req.body.email;

        var query=`update empdata set email="${email}" where empno=${empid}`;
        // var query='update empdata set email="'+email+'" where empno='+empid;
        con.query(query,function(err){
            if(!err)
            res.send("Insertion Successful")
            else
            res.send("Insertion Failed")
        })
    });


app.listen(9000,function(){
    console.log("Server started at port 9000");
})

