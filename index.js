const Discord = require('discord.js')
const config = require('./config.json')
const client = new Discord.Client();
client.prefix = config.prefix;
const shell = require('shelljs')
const fs = require('fs')

client.on("ready", () => {
	console.log('Obrigado por dar fork no projeto!')
	console.log('Sinta-se livre pra modificar e me mandar umas versões legais :D')
	console.log(`por favor, se você for usar uma .sh, use chmod 777 nomedashell.sh`)
});

client.on("message", async message => { // command handler, a parte básica :D
	let msg = message.content.toLowerCase();
	// sinta-se livre e faça um IF pra previnir que comandos sejam executados via DM.
	if (message.author.bot) return undefined;

	if (message.content.indexOf(client.prefix) !== 0) return;
	const args = message.content.slice(client.prefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase();
	
	try {
		let commands = require(`./commands/${command}.js`);
		commands.run(client, message, fs, args, config, shell);
	} catch (e) {
		console.log(e);
	} finally {}
	
	
});

client.login(config.token)