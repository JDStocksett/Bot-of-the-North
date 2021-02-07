console.log("Starting...");

require("dotenv").config();

// Initialize Discord Bot
const Discord = require('discord.js');
var client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("Connected");
    //console.log('Logged in as: ');
    //console.log(client.username + ' - (' + client.id + ')');
}


const commandHandler = require("./commands");

client.on("message", commandHandler);


