import { TextChannel } from "discord.js";
import * as Commando from "discord.js-commando";

module.exports = class AddCommand extends Commando.Command {
	constructor(client: Commando.CommandoClient) {
		super(client, {
			name: "clearchannel",
			group: "moderation",
			memberName: "clearchannel",
			description: "clears recent text in the channel",
			argsType: "single"
		});
	}

	async run(message: Commando.CommandoMessage, args: string | string[]) {
		console.log("--clear command--");
		const channel = (message.channel as TextChannel);
		if (message.member && message.member.roles.cache.some(r => ["Volunteer", "Paizo Society", "Magnetrons"].includes(r.name))) {
			if ((channel.id !== '742919603574931608') && (channel.id !== '742917901853655101') && (channel.id !== '742916074294476813') && (channel.id !== '428371336071610379') && (channel.id != '809893272880283689')) {
				const numberOfLines = Number(args);
				const lines = (numberOfLines > 0 ? numberOfLines : 100);
				console.log("Clearing chat");
				channel.bulkDelete(lines, true);
				return message;
			} else {
				const channelName = channel.name;
				console.log("Can't clear in current channel");
				return channel.send("You can't bulk delete messages in " + channelName + ".");
			}
		} else {
			console.log("No permission to clear");
			return channel.send("You don't have permissions to clear the text channel.  Ask for @Volunteer to help!");
		}
	}
};