const Discord = require("discord.js");
const client = new Discord.Client();

const perifx = "/";

client.once('ready', () => {
    console.log("VisioRoom est désormais en ligne")
})


client.login(process.env.TOKEN);