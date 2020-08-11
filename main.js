const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '%';


client.once('ready', () => {
	console.log('BlackBadgerBot is now online!');

	client.user.setActivity("%help to get badgered", {
	 type: "PLAYING",
	  url: "https://www.blackbadger.net"
	});
	
	});




client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	
	if(command === 'help'){
		message.channel.send('here is a list of commands:\n All commands start with a % \n - ip(See the server IP) \n - staff(learn more about the staff team) \n - apply(Apply to join the staff team) \n - website(Visit our website!) \n - deadmatter(visit the dead matter website)\n - credits(see the credits for this server)');
	}

	if(command === 'ping'){
		message.channel.send('pong');
	}

	if(command === 'ip'){
		message.channel.send('The Ip is still unknown for now! check back later');
	}

	if(command === 'staff'){
		message.channel.send('Our staff works hard every day to make this community the one you wanna play on.\n learn more about the staff team in #:handshake:-meet-the-staff');
	}

	if(command === 'apply'){
		message.channel.send('If we are looking for staff members go to https://blackbadger.net to apply for staff');
	}

	if(command === 'website'){
		message.channel.send('check out our website:\n https://blackbadger.net');
	}

	if(command === 'deadmatter'){
		message.channel.send('Check out the dead matter website:\n https://playdeadmatter.com');
	}

	if(command === 'credits'){
		message.channel.send('Credits:\n Server owned by: tangodown and SourPatchClown \n Website and BlackBadger Bot by: SietseMuller \n Special thanks to: no one yet ');
	}

});






client.login('NzQyNjUwMjE2NzQ5OTg5ODkw.XzJM6Q.WFpteco6bWTk-bDCsiQCnyIdLHc');
