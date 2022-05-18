var express = require('express');
const cors = require('cors');
var app = express();
app.use(cors());
var fs = require("fs");
const { exec } = require('child_process');
var spawn = require('child_process').spawn;
var kill = require('tree-kill');
var UwUPid;
var DickPid;

app.get('/StartUwUBot', function (req, res) {
    UwUPid = exec('node ../../../Discord-Bots/UwUBot/uwu.js',{detached: true}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("UwUBot Started");
        return res.send("Success");
    });
    console.log(UwUPid.pid);
})

app.get('/KillUwUBot', function(req, res){
    console.log(UwUPid.pid);
    process.stdin.pause();
    kill(UwUPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

app.get('/StartDickJohnson', function(req, res){
    DickPid = exec('dotnet run --project ../../../Discord-Bots/DickJohnson',{detached: true}, function(err, stdout, stderr){
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("Dick Johnson Started");
        return res.send("Success");
    });
})

app.get('/KillDickJohnson', function(req, res){
    console.log(DickPid.pid);
    process.stdin.pause();
    kill(DickPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})