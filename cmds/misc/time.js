const Commando = require("discord.js-commando")

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

	async run(message, args) {
		console.log("--time command--")
		process.env.TZ = 'America/Chicago'
		let date = new Date()
        // Send time
		let hours = date.getHours()
		var dow = 0
		let day = date.getDay()
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
        let content = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
		var content2 = 0
		if (hours > 12) {
			console.log(">12")
			content2 = date.getHours() - 12 + ":" + date.getMinutes() + ":" + date.getSeconds() + " PM"
		} else if (hours = 12) {
			console.log("=12")
			content2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " PM"
		} else  if (hours = 0) {
			console.log("0")
			content2 = date.getHours() + 12  + ":" + date.getMinutes() + ":" + date.getSeconds() + " AM"
		} else {
			console.log("<12")
			content2 = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " AM"
		}		
		message.channel.send("It's currently " + dow + ", " + content + " | " + content2 + " - convention (Central) time.")
	}
}