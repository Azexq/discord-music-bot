const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, query) => {

    const result1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - ${query} isimli şarkı YouTube'da bulunamadı!**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(result1);

};