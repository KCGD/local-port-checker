var http = require('http');

var port = parseFloat(process.argv[2]);
var _server = http.createServer((req,res) => {}).listen(port);

process.on("uncaughtException",function(error){
    process.send("closed");
    process.exit(); //returns value and exits process, not allowing not in use status to be sent
})

setTimeout(function(){
     //only sends if the process hasn't exited, meaning that the server was able to start successfully
    process.send("open");
    process.exit()
},200)
