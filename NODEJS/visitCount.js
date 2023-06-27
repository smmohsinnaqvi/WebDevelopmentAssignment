var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){

    if(req.url=="/favicon")
	return;
    fs.readFile('visitcount.txt',function(err,data){
        if(!err)
        {
             var cnt=parseInt(data);
             cnt++;
             fs.writeFile('visitcount.txt',""+cnt,function(err){
                if(!err)
                   console.log("count updated")
             })
             res.writeHead(200,{"content-type" : "text/html"})
             res.write("<h1> Count is : " + cnt +"</h1>" );
             res.end();

        }
    })
    
       
       
    


}).listen(9000,function(){
    console.log("Server started at port 9000")
   // console.log(vc.visit());
})