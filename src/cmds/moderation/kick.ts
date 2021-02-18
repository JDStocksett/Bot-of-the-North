import * as Commando from "discord.js-commando";

module.exports = class KickCommand extends Commando.Command {
	constructor(client: Commando.CommandoClient) {
		super(client, {
			name: "kick",
			group: "moderation",
			memberName: "kick",
			description: "Kicks a member from the Discord server",
			clientPermissions: [
				"KICK_MEMBERS"
			],
			userPermissions: [
				"KICK_MEMBERS"
			]
		});
	}

	async run(message: Commando.CommandoMessage) {
		const target = message.mentions.users.first();
		if (!target) {
			return message.reply("Please specify someone to kick");
		}

		const { guild } = message;

		const member = guild.members.cache.get(target.id);

		if (member && member.kickable) {
			member.kick();
			return message.reply("That user has been kicked");
		} else {
			return message.reply("I cannot kick that user");
		}
	}
};