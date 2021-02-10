const fetch = require('node-fetch');

module.exports = async function (msg, args) {
	console.log("gif command");
	let keywords = "random"
	if (args.length > 0) {
		keywords = args.join(" ");
	}
	console.log(keywords);
	let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=medium`
	let response = await fetch(url);
	let json = await response.json();
	let resCount = json.results.length;
	const index = Math.floor(Math.random() * resCount);
	
	console.log(index);
	msg.channel.send (json.results[index].url);
};