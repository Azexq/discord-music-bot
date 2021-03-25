const Discord = require('discord.js');
const config = require("../config.json")

exports.run = async (client, message) => {

    const ping = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`✔️ - Ping: ${client.ws.ping}ms`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(ping);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ms','ping'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'ping',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };