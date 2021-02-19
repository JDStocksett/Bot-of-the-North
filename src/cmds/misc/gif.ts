import * as Commando from "discord.js-commando";
import fetch from 'node-fetch';

module.exports = class AddCommand extends Commando.Command {
	constructor(client: Commando.CommandoClient) {
		super(client, {
			name: "gif",
			group: "misc",
			memberName: "gif",
			description: "searches for a gif",
			argsType: "single"
		});
	}

	async run(message: Commando.CommandoMessage, args: string | string[]) {
		console.log("--gif command--");
		const keywords = (args.length > 0 ? args : "random");
		console.log(keywords);
		const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=medium`;
		const response = await fetch(url);
		const json = await response.json();
		const resCount = json.results.length;
		const index = Math.floor(Math.random() * resCount);

		console.log(index);
		return message.channel.send(json.results[index].url);
	}
};