import * as Commando from "discord.js-commando";

module.exports = class AddCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "time",
			group: "misc",
			memberName: "time",
			description: "provides current time",
			argsType: "single"
		})
	}

	async run(message) {
		console.log("--time command--")
		process.env.TZ = 'America/Chicago'
		const date = new Date()
		// Send time
		const hours = date.getHours()
		let dow = "";
		const day = date.getDay()
		switch (day) {
			case 0:
				dow = "Sunday"
				break
			case 1:
				dow = "Monday"
				break
			case 2:
				dow = "Tuesday"
				break
			case 3:
				dow = "Wednesday"
				break
			case 4:
				dow = "Thursday"
				break
			case 5:
				dow = "Friday"
				break
			default:
				dow = "Saturday"
				break
		}
		const content = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
		let content2 = "";
		if (hours > 12) {
			console.log(">12")
			content2 = date.getHours() - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " PM"
		} else if (hours == 12) {
			console.log("=12")
			content2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " PM"
		} else if (hours == 0) {
			console.log("0")
			content2 = date.getHours() + 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " AM"
		} else {
			console.log("<12")
			content2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " AM"
		}
		return message.channel.send("It's currently " + dow + ", " + content + " | " + content2 + " - convention (Central) time.")
	}
}