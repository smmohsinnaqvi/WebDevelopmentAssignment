var http = require('http');
var u = require('./utility');
var server = http.createServer(function(req,res){
    //console.log("Hello World");
    res.writeHead(200,{"content-type" : "text/html"});
    res.write("<h1>Hello World</h1>");
    res.end();
})

server.listen(9000,function(){
    console.log(`Server Started at port 9000`);
    console.log("Process ID " + process.pid);
    console.log("Current Working Directory " + process.pwd);
    console.log("File Name " + __filename);
    console.log("Directory Name " + __dirname);


    //Question 2

    console.log(u.isPrime(10));
    console.log(u.isPerfect(28));
    console.log(u.calFact(6));

})