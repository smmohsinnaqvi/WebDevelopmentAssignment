var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type' : 'text/html'});
    res.write("<h1>Hello From NODEJS");
    res.end();

}).listen(9000,function(){
    console.log("Server Started at Port 9000");
})