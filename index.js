var Discord = require("discord.js");
var minimist = require('minimist');

var args = minimist(process.argv.slice(2));

if (!args.user || !args.password){
    throw new Error("You must supply user and password using `--user XXX --password XXX`");
}

var bot = new Discord.Client();

bot.on("message", function (message){

});

bot.login(args.user, args.password);


