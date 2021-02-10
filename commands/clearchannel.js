module.exports = async function (msg, args) {
	console.log("clear command");
	if (msg.member.roles.cache.some(r=>["Volunteer", "Paizo Society", "Magnetrons"].includes(r.name))) {
		if ((msg.channel.id !== '742919402814439535') && (msg.channel.id !== '742919603574931608') && (msg.channel.id !== '742916074294476813') && (msg.channel.id !== '742917901853655101')) {//&& (msg.channel.id !== '251095634625429504')) {
			let lines = 100;
			if (args > 0){
				lines = args;
			}
			msg.channel.bulkDelete(lines,true);
			console.log("Cleared chat");
		} else {
			let channelName = msg.channel.name;
			msg.channel.send("You can't bulk delete messages in this channel.");
			console.log("No clear in current channel");
		}
	} else {
		msg.channel.send("You don't have permissions to clear the text channel.  Ask for @Volunteer to help!")
		console.log("No permission to clear");
	}
}