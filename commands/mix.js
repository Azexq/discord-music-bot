const Discord = require("discord.js");
const config = require("../config.json")

exports.run = async (client, message) => {

    
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const shuffle1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Lütfen bir sesli kanala girin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(shuffle1);

    const shuffle2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Şu anda oynatma listesinde şarkı yok!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)


    if (!client.player.getQueue(message)) return message.channel.send(shuffle2);

    client.player.shuffle(message);

    const shuffle3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`✔️ - **${client.player.getQueue(message).tracks.length}** adet şarkı başarıyla karıştırıldı!`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    return message.channel.send(shuffle3);

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mix','karıştır','karistir'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'mix',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };
