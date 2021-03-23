module.exports = function(port,callback){
    //returns boolean based off of the port being in use, returns false if the port is open, true if the port is in use
    var c = require('child_process');
    var checker = c.fork(__dirname+"/port_checker.js",[port])
    checker.on('message',function(message){
        if(message === "open"){
            callback(false);
        } else {
            callback(true)
        }
    })
}