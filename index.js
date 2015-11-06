var Discord = require("discord.js");
var minimist = require('minimist');

var config = require("./config");
var args = minimist(process.argv.slice(2));
var resolveUnit = require("./resolveUnit");

if (!args.user || !args.password){
    throw new Error("You must supply user and password and channel to connnect to using `--user XXX --password XXX`");
}

var bot = new Discord.Client();

bot.on("message", function (message) {

    if (message.channel.serverID != config.channel)
        return;

    var unit = resolveUnit(message.content);

    if (!unit)
        return;

    console.log("Got request for " + unit.Name);

    bot.sendFile(message.channel, unit.Image , unit.Name + ".png");
});

console.log("Running bot...");

bot.login(args.user, args.password);


