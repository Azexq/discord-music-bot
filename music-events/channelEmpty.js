const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, message, queue) => {

    const emp = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - Sesli kanaldaki herkes çıktığı için müziği kapattım.`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(emp);

};