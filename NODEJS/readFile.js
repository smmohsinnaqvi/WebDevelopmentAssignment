var http = require('http');
var url = require('url');
var fs= require('fs');

http.createServer(function(req,res){
    
    var urlp = url.parse(req.url,true);
    var path = urlp.pathname;
    //res.write(path);
    var fname=path.substring(1);
    fs.readFile(fname,function(err,data){
        if(!err)
        {
            res.writeHead(200,{"content-type" : "text/html"});
            res.write(data.toString());
            console.log(data.toString())
            res.end();
        }
    })

}).listen(9000,function()
{
    console.log("Server started at port 9000");

})