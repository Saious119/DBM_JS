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
        key: fs.readFileSync("/etc/letsencrypt/live/www.fortrash.com/privkey.pem"),
        cert: fs.readFileSync("/etc/letsencrypt/live/www.fortrash.com/cert.pem"),
    },
        app
)
.listen(4000, () => {
    console.log("serever is runing at port 4000");
});

var UwUPid;
var JonTronPid;
var OwOBotPid;
var OyVeyPid
var DickPid;
var PiratePid;
var TarotPid;
var TerryDavisPid;
var WSBPid;

app.get('/StartUwUBot', function (req, res) {
    UwUPid = exec('node uwu.js &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/UwUBot')}, function (err, stdout, stderr) {
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

app.get('/StartJonTronBot', function (req, res) {
    JonTronPid = exec('node jontron.js &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/JonTronBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("JonTronBot Started");
        return res.send("Success");
    });
    console.log(JonTronPid.pid);
})

app.get('/KillJonTronBot', function(req, res){
    console.log(JonTronPid.pid);
    process.stdin.pause();
    kill(JonTronPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

app.get('/StartOwOBot', function (req, res) {
    OwOBotPid = exec('node OwOBot.js &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/OwOBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("OwOBot Started");
        return res.send("Success");
    });
    console.log(OwOBotPid.pid);
})

app.get('/KillOwOBot', function(req, res){
    console.log(OwOBotPid.pid);
    process.stdin.pause();
    kill(OwOBotPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

app.get('/StartOyVeyBot', function (req, res) {
    OyVeyPid = exec('node OyVeyBot.js &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/OyVeyBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("OyVeyBot Started");
        return res.send("Success");
    });
    console.log(OyVeyPid.pid);
})

app.get('/KillOyVeyBot', function(req, res){
    console.log(OyVeyPid.pid);
    process.stdin.pause();
    kill(OyVeyPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})


app.get('/StartDickJohnson', function(req, res){
    DickPid = exec('dotnet run &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/DickJohnson')}, function (err, stdout, stderr) {
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
    PiratePid = exec('./PirateBot &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/PirateBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("Pirate Bot Started");
        return res.send("Success");
    });
})

app.get('/KillPirateBot', function(req, res){
    console.log(PiratePid.pid);
    process.stdin.pause();
    kill(PiratePid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

app.get('/StartTarotBot', function (req, res) {
    TarotPid = exec('node tarot.js &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/TarotBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("TarotBot Started");
        return res.send("Success");
    });
    console.log(TarotPid.pid);
})

app.get('/KillTarotBot', function(req, res){
    console.log(TarotPid.pid);
    process.stdin.pause();
    kill(TarotPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

app.get('/StartTerryDavisBot', function (req, res) {
    TerryDavisPid = exec('node terrydavisbot.js &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/TerryDavisBot')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("TerryDavisBot Started");
        return res.send("Success");
    });
    console.log(TerryDavisPid.pid);
})

app.get('/KillTerryDavisBot', function(req, res){
    console.log(TerryDavisPid.pid);
    process.stdin.pause();
    kill(TerryDavisPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})

app.get('/StartWSB', function(req, res){
    WSBPid = exec('./WSB &', { detached: true, cwd: path.resolve(__dirname, '../../../Discord-Bots/WSB')}, function (err, stdout, stderr) {
        if (err) {
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }  
        console.log("WSB Started");
        return res.send("Success");
    });
})

app.get('/KillWSB', function(req, res){
    console.log(WSBPid.pid);
    process.stdin.pause();
    kill(WSBPid.pid, "SIGTERM");
    console.error("Killded good");
    res.send("Killded");
})


// GIT UPDATE
app.get('/GitUpdateDBM', function(req, res){
    exec('git pull', {detached: true, cwd: path.resolve(__dirname, '/home/andym/DBM_JS/DBM_JS/')}, function(err, stdout, stderr){
        if(err){
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }
        console.log("pulled latest");
        exec('bash deploy', {detached: true, cwd: path.resolve(__dirname, '/home/andym/DBM_JS/DBM_JS/')}, function(err, stdout, stderr){
            if(err){
                console.error(`exec error: ${err}`);
                return res.send("Error");
            }
            console.log("deployed latest");
            return res.send("Success");
        })
        return res.send("Success");
    })
})

app.get('/GitUpdateDiscordBots', function(req, res){
    exec('git pull', {detached: true, cwd: path.resolve(__dirname, '/home/andym/Discord-Bots/')}, function(err, stdout, stderr){
        if(err){
            console.error(`exec error: ${err}`);
            return res.send("Error");
        }
        console.log("pulled latest");
        return res.send("Success");
    })
})



