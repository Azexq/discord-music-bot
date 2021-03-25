const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, query, tracks, content, collector) => {

    const searc1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - Lütfen **1** ve **${tracks.length}** arasında bir sayı giriniz!**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(searc1);

};