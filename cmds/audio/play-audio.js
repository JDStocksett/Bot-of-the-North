const Commando = require("discord.js-commando")
const path = require("path")

module.exports = class PlayAudioCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "play",
			group: "audio",
			memberName: "play",
			description: "Plays some audio"
		})
	}

	async run(message, args) {
		console.log("--play command--")
		if (message.member.roles.cache.some(r=>["Volunteer", "Paizo Society", "Magnetrons", "PlayAudio"].includes(r.name))) {
			const {voice} = message.member

			if (!voice.channelID) {
				message.reply("You must be in a voice channel.")
				return
			}
			console.log("connecting to voice")
			voice.channel.join().then((connection) => {
				console.log("playing " + path.join(__dirname, args + ".wav"))
				const dispatcher = connection.play(path.join(__dirname, args + ".wav"))
				console.log("played")
				dispatcher.on("finish", finish => {
					//console.log("leaving voice")
					//voice.channel.leave()
				})
			})
		} else {
			console.log("no permission")
			message.reply("You don't have permission for this command.")
		}
	}
}