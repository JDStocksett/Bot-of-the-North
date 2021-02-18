import 'module-alias/register';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as Commando from 'discord.js-commando';

dotenv.config();

console.log("Starting...");

const client = new Commando.CommandoClient({
    owner: '143050314604347392',
    commandPrefix: '!'
});

client.on("ready", async () => {
    console.log("Connected!");

    client.registry
        .registerGroups([
            ["misc", "misc commands"],
            ["moderation", "moderation commands"],
            ["audio", "audio commands"]
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, "cmds"));
});

client.login(process.env.BOTTOKEN);