var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

    var cnt;
    fs.readFile("log.txt",function(err,data)
    {
        if(!err)
        {
            cn
            fs.appendFile("log.txt",""+new Date()+"\n",function(err1)
            {
                if(!err1)
                {
                    console.log("Success")
                }
                else
                {
                    console.log("Not Successful")
                }
            })
        }
    })
}).listen(9000,function()
{
    console.log("Server Started at port 9000");
})