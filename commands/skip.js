const Discord = require("discord.js");
const config = require("../config.json")
exports.run = async (client, message) => {

    
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const skip1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Lütfen bir sesli kanala girin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(skip1);

    const skip2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(skip2);

    client.player.skip(message);

    const skip3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - Oynatılan şarkı başarıyla geçildi.`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    message.channel.send(skip3);

};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['skip','geç','gec'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'skip',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };
