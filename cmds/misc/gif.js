const Commando = require("discord.js-commando")
const fetch = require("node-fetch")

module.exports = class AddCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: "gif",
			group: "misc",
			memberName: "gif",
			description: "searches for a gif",
			argsType: "single"
		})
	}

	async run(message, args) {
		console.log("--gif command--")
		let keywords = "random"
		if (args.length > 0) {
			keywords = args
		}
		console.log(keywords)
		let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=medium`
		let response = await fetch(url);
		let json = await response.json();
		let resCount = json.results.length;
		const index = Math.floor(Math.random() * resCount);
	
		console.log(index);
		message.channel.send (json.results[index].url);
	}
}