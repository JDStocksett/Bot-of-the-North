const Commando = require("discord.js-commando")

module.exports = class AddCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "clearchannel",
			group: "moderation",
			memberName: "clearchannel",
			description: "clears recent text in the channel",
			argsType: "single"
		})
	}

	async run(message, args) {
		console.log("--clear command--")
		if (message.member.roles.cache.some(r=>["Volunteer", "Paizo Society", "Magnetrons"].includes(r.name))) {
			if ((message.channel.id !== '742919603574931608') && (message.channel.id !== '742917901853655101') && (message.channel.id !== '742916074294476813') && (message.channel.id !== '428371336071610379') && (message.channel.id != '809893272880283689')) {
				let lines = 100;
				if (args > 0){
					lines = args;
				}
				message.channel.bulkDelete(lines,true);
				console.log("Cleared chat");
			} else {
				let channelName = message.channel.name;
				message.channel.send("You can't bulk delete messages in " + channelName + ".");
				console.log("Can't clear in current channel");
			}
		} else {
			message.channel.send("You don't have permissions to clear the text channel.  Ask for @Volunteer to help!")
			console.log("No permission to clear");
		}
	}
}