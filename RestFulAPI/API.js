var express = require('express');
const https = require("https");
const cors = require('cors');
var app = express();
app.use(cors({
	//origin: "https://cringebots.dev", // restrict calls to those this address
    origin: "*",
	methods: "GET" // only allow GET requests
}));
var fs = require("fs");
const { exec } = require('child_process');
var spawn = require('child_process').spawn;
var kill = require('tree-kill');
var path = require('path');
//const port = process.env.SERVER_PORT || 8081;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

https
    .createServer(
    // Provide the private and public key to the server by reading
    // each file's content with the readFileSync() method.
    {
        key: fs.readFileSync("key.pem"),
        cert: fs.readFileSync("cert.pem"),
    },
        app
)
.listen(4000, () => {
    console.log("serever is runing at port 4000");
});

var UwUPid;
var DickPid;
var PiratePid;

app.get('/StartUwUBot', function (req, res) {
    UwUPid = exec('node uwu.js', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/UwUBot')}, function (err, stdout, stderr) {
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
    DickPid = exec('dotnet run', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/DickJohnson')}, function (err, stdout, stderr) {
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

app.get('/StartPirateBot', function(req, res){
    PiratePid = exec('./PirateBot', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/PirateBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("Pirate Bot Started");
        return res.send("Success");
    });
})

app.get('/KillPirateBot', function(req, res){
    console.log(DickPid.pid);
    process.stdin.pause();
    kill(PiratePid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

/*var server = app.listen(8081, '0.0.0.0', function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
*/

