var express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());
var fs = require("fs");
const { exec } = require('child_process');
var spawn = require('child_process').spawn;
var UwUPid;

app.get('/StartUwUBot', function (req, res) {
    UwUPid = exec('node ../../Discord-Bots/UwUBot/uwu.js',{detached: true}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            res.send("Error");
        }  
        console.log("UwUBot Started");
        res.send("Success");
    });
    console.log(UwUPid.pid);
})

app.get('/KillUwUBot', function(req, res){
    console.log(UwUPid.pid);
    process.kill(UwUPid.pid, "SIGTERM");
    //exec(`kill -9 ${UwUPid.pid}`);
    console.error("Killded good");
    res.send("Killded");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})