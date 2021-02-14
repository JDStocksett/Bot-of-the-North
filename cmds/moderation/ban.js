const Commando = require("discord.js-commando")

module.exports = class BanCommand extends Commando.Command{
	constructor(client) {
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
		})
	}

	async run(message) {
		const target = message.mentions.users.first()
		if (!target) {
			message.reply("Please specify someone to ban")
			return
		}

		const {guild} = message

		const member = guild.members.cache.get(target.id)
		if (member.banable) {
			member.ban()
			message.reply(member.displayName + " got the :banhammer:")
		} else {
			message.reply("I cannot kick that user")
		}
	}
}