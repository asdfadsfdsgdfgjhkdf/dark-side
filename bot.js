const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("611582045683974156")
setInterval(function() {
channel.send(`I Was Need Credits By Ahmed Dragon`);
}, 30)
})

client.login(process.env.BOT_TOKEN);