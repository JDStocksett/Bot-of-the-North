import * as Commando from "discord.js-commando";

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
		if (message.member.roles.cache.some(r => ["Volunteer", "Paizo Society", "Magnetrons"].includes(r.name))) {
			if ((message.channel.id !== '742919603574931608') && (message.channel.id !== '742917901853655101') && (message.channel.id !== '742916074294476813') && (message.channel.id !== '428371336071610379') && (message.channel.id != '809893272880283689')) {
				let lines = 100;
				if (args > 0) {
					lines = args;
				}
				console.log("Clearing chat");
				return message.channel.bulkDelete(lines, true);
			} else {
				const channelName = message.channel.name;
				console.log("Can't clear in current channel");
				return message.channel.send("You can't bulk delete messages in " + channelName + ".");
			}
		} else {
			console.log("No permission to clear");
			return message.channel.send("You don't have permissions to clear the text channel.  Ask for @Volunteer to help!")
		}
	}
}