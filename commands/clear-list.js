const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message) => {

    
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const que1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("**❗️ - Lütfen bir sesli kanala girin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(que1);

    const que2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(que2);

    const que3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`✔️ - Oynatma listesi başarıyla temizlendi!`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    client.player.clearQueue(message);

    message.channel.send(que3);

};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['clear-list','liste-temizle'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'clear-list',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };