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

    const queue = client.player.getQueue(message);

    const que2 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(que2);

    const que3 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription(`**Sunucu - ${message.guild.name} :bar_chart:**\n\nOynatılan şarkı: ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
    return `**#${i + 1}** - ${track.title} | ${track.author} (${track.requestedBy.username} tarfından istendi)`
}).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `Şu anda oynatma listesinde **${queue.tracks.length}** şarkı var`}`))
.setTimestamp()
.setFooter(`${config.footer}`)

    message.channel.send(que3)

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['list','liste','queue'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'queue',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };