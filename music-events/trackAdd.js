const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, queue, track) => {

    const add1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - ${track.title} ismli şarkı başarıyla oynatma listesine eklendi!`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(add1);

};