const gif = require('./commands/gif');
const clearchannel = require('./commands/clearchannel');

const commands = { gif, clearchannel };

module.exports = async function (msg, client) {
    //const botWasMentioned = msg.mentions.has(client.user.id);

	
    //if (botWasMentioned) {
		//Our bot needs to know if it will execute a command
		//It will listen for messages that will start with `!`
		let tokens = msg.content.split(" ");
			console.log(tokens)
		let command = tokens.shift();
		if (command.charAt(0) === "!") {
			command = command.substring(1);
			commands[command](msg, tokens);
		}
	//}
};


