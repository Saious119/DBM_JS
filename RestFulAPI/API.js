var express = require('express');
const { Console } = require('console');
const fs = require('fs');
const https = require("https");
const cors = require('cors');
var app = express();
app.use(cors({
	//origin: "https://cringebots.dev", // restrict calls to those this address
    origin: "*",
	methods: "GET" // only allow GET requests
}));
const { exec } = require('child_process');
var spawn = require('child_process').spawn;
var kill = require('tree-kill');
var path = require('path');
const { stderr } = require('process');
const Logger = new Console ({
    stdout: fs.createWriteStream("/home/pi/DBM_JS/APILogs.txt"),
    stderr: fs.createWriteStream("/home/pi/DBM_JS/APIErrorLogs.txt"),
});
//const port = process.env.SERVER_PORT || 8081;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(4000, () => {
    Logger.log("serever is runing at port 4000");
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
var BrainCellPid;
var AndyPid;
var JailPid

app.get('/StartUwUBot', function (req, res) {
    if (UwUPid !== undefined) {
        return res.status(200).send("UwUBot already running")
    }
    UwUPid = spawn('node',['uwu.js'], { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/UwUBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("UwUBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(UwUPid.pid);
})

app.get('/KillUwUBot', function(req, res){
    Logger.log(UwUPid.pid);
    process.stdin.pause();
    kill(UwUPid.pid, "SIGTERM");
    Logger.log("Killded UwUBot good");
    res.status(200).send("Killded UwUBot");
})

app.get('/StartJonTronBot', function (req, res) {
    if (JonTronPid !== undefined) {
        return res.status(200).send("JonTronBot already running")
    }
    JonTronPid = exec('node jontron.js &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/JonTronBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("JonTronBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(JonTronPid.pid);
})

app.get('/KillJonTronBot', function(req, res){
    Logger.log(JonTronPid.pid);
    process.stdin.pause();
    kill(JonTronPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})

app.get('/StartOwOBot', function (req, res) {
    if (OwOBotPid !== undefined) {
        return res.status(200).send("OwOBot already running")
    }
    OwOBotPid = exec('node OwOBot.js &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/OwOBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("OwOBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(OwOBotPid.pid);
})

app.get('/KillOwOBot', function(req, res){
    Logger.log(OwOBotPid.pid);
    process.stdin.pause();
    kill(OwOBotPid.pid, "SIGTERM");
    Logger.log("Killded OwOBot good");
    res.status(500).send("Killded OwOBot");
})

app.get('/StartOyVeyBot', function (req, res) {
    if (OyVeyPid !== undefined) {
        return res.status(200).send("OyVeyBot already running")
    }
    OyVeyPid = exec('node OyVeyBot.js &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/OyVeyBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        } 
        Logger.log(stdout);
        Logger.log(stderr); 
        Logger.log("OyVeyBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(OyVeyPid.pid);
})

app.get('/KillOyVeyBot', function(req, res){
    Logger.log(OyVeyPid.pid);
    process.stdin.pause();
    kill(OyVeyPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})


app.get('/StartDickJohnson', function(req, res){
    if (DickPid !== undefined) {
        return res.status(200).send("DickJohnson already running")
    }
    DickPid = exec('/home/pi/dotnet6/dotnet run &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/DickJohnson')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("Dick Johnson Started");
        return res.status(200).send("Success");
    });
    Logger.log(DickPid.pid);
})

app.get('/KillDickJohnson', function(req, res){
    Logger.log(DickPid.pid);
    process.stdin.pause();
    kill(DickPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})

app.get('/StartPirateBot', function(req, res){
    if (PiratePid !== undefined) {
        return res.status(200).send("PirateBot already running")
    }
    PiratePid = exec('./PirateBot &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/PirateBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("Pirate Bot Started");
        return res.status(200).send("Success");
    });
    Logger.log(PiratePid.pid);
})

app.get('/KillPirateBot', function(req, res){
    Logger.log(PiratePid.pid);
    process.stdin.pause();
    kill(PiratePid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})

app.get('/StartTarotBot', function (req, res) {
    if (TarotPid !== undefined) {
        return res.status(200).send("TarotBot already running")
    }
    TarotPid = exec('node tarot.js &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/TarotBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log("TarotBot Started");
        Logger.log(stdout);
        Logger.log(stderr);
        return res.status(200).send("Success");
    });
    Logger.log(TarotPid.pid);
})

app.get('/KillTarotBot', function(req, res){
    Logger.log(TarotPid.pid);
    process.stdin.pause();
    kill(TarotPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})

app.get('/StartTerryDavisBot', function (req, res) {
    if (TerryDavisPid !== undefined) {
        return res.status(200).send("TerryDavisBot already running")
    }
    TerryDavisPid = exec('node terrydavisbot.js &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/TerryDavisBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("TerryDavisBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(TerryDavisPid.pid);
})

app.get('/KillTerryDavisBot', function(req, res){
    Logger.log(TerryDavisPid.pid);
    process.stdin.pause();
    kill(TerryDavisPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})

app.get('/StartWSB', function(req, res){
    if (WSBPid !== undefined) {
        return res.status(200).send("WSB already running")
    }
    WSBPid = exec('./WSB &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/WSB')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("WSB Started");
        return res.status(200).send("Success");
    });
    Logger.log(WSBPid.pid);
})

app.get('/KillWSB', function(req, res){
    Logger.log(WSBPid.pid);
    process.stdin.pause();
    kill(WSBPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})
app.get('/StartBrainCellBot', function(req, res){
    if (BrainCellPid !== undefined) {
        return res.status(200).send("Brain Cell Bot already running")
    }
    BrainCellPid = exec('/home/pi/dotnet6/dotnet run &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/BrainCellBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("BrainCellBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(BrainCellPid.pid);
})

app.get('/KillBrainCellBot', function(req, res){
    Logger.log(BrainCellPid.pid);
    process.stdin.pause();
    kill(BrainCellPid.pid, "SIGTERM");
    Logger.log("Killded good");
    res.status(200).send("Killded");
})

app.get('/StartAndyBot', function(req, res){
    if (AndyPid !== undefined) {
        return res.status(200).send("Andy Bot already running")
    }
    AndyPid = exec('./AndyBot &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/AndyBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("AndyBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(AndyPid.pid);
})

app.get('/KillAndyBot', function(req, res){
    Logger.log(AndyPid.pid);
    process.stdin.pause();
    kill(AndyPid.pid, "SIGTERM");
    Logger.log("Killded AndyBot good");
    res.status(200).send("Killded AndyBot");
})

app.get('/StartJailBot', function (req, res) {
    if (JailPid !== undefined) {
        return res.status(200).send("JailBot already running")
    }
    JailPid = exec('node JailBot.js &', { detached: true, cwd: path.resolve(__dirname, '../../Discord-Bots/JailBot')}, function (err, stdout, stderr) {
        if (err) {
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }  
        Logger.log(stdout);
        Logger.log(stderr);
        Logger.log("JailBot Started");
        return res.status(200).send("Success");
    });
    Logger.log(JailPid.pid);
})

app.get('/KillJailBot', function(req, res){
    Logger.log(JailPid.pid);
    process.stdin.pause();
    kill(JailPid.pid, "SIGTERM");
    Logger.log("Killded JailBot good");
    res.status(200).send("Killded JailBot");
})
// GIT UPDATE
app.get('/GitUpdateDBM', function(req, res){
    exec('git pull', {detached: true, cwd: path.resolve(__dirname, '/home/andym/DBM_JS/')}, function(err, stdout, stderr){
        if(err){
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }
        Logger.log("pulled latest");
        exec('bash deploy.sh', {detached: true, cwd: path.resolve(__dirname, '/home/andym/DBM_JS/')}, function(err, stdout, stderr){
            if(err){
                Logger.log(`exec error: ${err}`);
                return res._construct.status(500).send("Error");
            }
            Logger.log(stdout);
            Logger.log(stderr);
            Logger.log("deployed latest");
            return res.status(200).send("Success");
        })
    })
})
app.get('/GitUpdateDiscordBots', function(req, res){
    exec('git pull', {detached: true, cwd: path.resolve(__dirname, '/home/andym/Discord-Bots/')}, function(err, stdout, stderr){
        if(err){
            Logger.log(`exec error: ${err}`);
            return res.status(500).send("Error");
        }
        Logger.log("pulled latest");
        return res.status(200).send("Success");
    })
})



