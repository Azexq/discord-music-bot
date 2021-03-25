const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, playlist) => {

    const pl1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - İçinde **${playlist.items.length}** adet şarkı bulunduran **${playlist.title}** başarıyla oynatma listesine eklendi.`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(pl1);

};