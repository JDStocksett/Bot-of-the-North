import * as Commando from "discord.js-commando";

module.exports = class BanCommand extends Commando.Command {
	constructor(client: Commando.CommandoClient) {
		super(client, {
			name: "ban",
			group: "moderation",
			memberName: "ban",
			description: "Bans a member from the Discord server",
			clientPermissions: [
				"BAN_MEMBERS" // update
			],
			userPermissions: [
				"BAN_MEMBERS" // update
			]
		});
	}

	async run(message: Commando.CommandoMessage) {
		const target = message.mentions.users.first();
		if (!target) {
			return message.reply("Please specify someone to ban");
		}

		const { guild } = message;

		const member = guild.members.cache.get(target.id);
		if (member && member.bannable) {
			member.ban();
			return message.reply(member.displayName + " got the :banhammer:");
		} else {
			return message.reply("I cannot kick that user");
		}
	}
};