var http = require('http');

var port = parseFloat(process.argv[2]);
//console.log("[CHILD]: checking port: "+port);
var _server = http.createServer((req,res) => {
    //console.log(req.url);
    res.end("server running")
}).listen(port);

process.on("uncaughtException",function(error){
    //console.log("[CHILD]: "+error);
    //console.log("[CHILD]: PORT IN USE");
    process.send("closed");
    process.exit(); //returns value and exits process, not allowing not in use status to be sent
})

setTimeout(function(){
    //console.log("[CHILD]: PORT NOT IN USE"); //only sends if the process hasn't exited, meaning that the server was able to start successfully
    process.send("open");
    process.exit()
},200)