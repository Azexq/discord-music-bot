const Discord = require("discord.js");
const config = require("../config.json")
exports.run = async (client, message) => {
   
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const loop1 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("**❗️ - Lütfen bir sesli kanala girin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(loop1);

    const loop2 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription("**❗️ - Döngüye almak için bir şarkı ekleyin!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(loop2);

    const repeatMode = client.player.getQueue(message).repeatMode;

    const loop3 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`✔️ - Döngü başarıyla **aktive** edildi!`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const loop4 = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`✔️ - Döngü başarıyla **devre dışı** edildi!`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    if (repeatMode) {
        client.player.setRepeatMode(message, false);
        return message.channel.send(loop3);
    } else {
        client.player.setRepeatMode(message, true);
        return message.channel.send(loop4);
    };

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['döngü','dongu','loop'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'loop',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };