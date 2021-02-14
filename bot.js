console.log("Starting...");

require("dotenv").config();
require("module-alias/register")

const path = require("path")
const Commando = require('discord.js-commando')

const client = new Commando.CommandoClient({
    owner: '143050314604347392',
    commandPrefix: '!'
})

client.on("ready", async () => {
    console.log("Connected");

    client.registry
        .registerGroups([
            ["misc", "misc commands"],
            ["moderation", "moderation commands"],
            ["audio", "audio commands"]
		])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, "cmds"))
})

client.login(process.env.BOTTOKEN);