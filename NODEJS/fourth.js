var http = require('http');
var url = require('url');


http.createServer(function(req,res){
    var urlp = url.parse(req.url,true);
    var name= urlp.query.name
    res.writeHead(200,{"content-type" : "text/html"});
    res.write("<h1> Hello " + name +"</h1> ");
    res.end();

}).listen(9000,function()
{
    console.log("Server Started At port 9000");
})