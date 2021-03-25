const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, query, tracks) => {

    const cancel1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - Geçerli bir argüman girmediniz! Lütfen tekrar deneyin.**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(cancel1);

};