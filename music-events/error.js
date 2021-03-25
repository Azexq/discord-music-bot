const Discord = require("discord.js");
const config = require("../config.json")

module.exports = (client, error, message) => {

    const error1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗ - Bu sunucuda müzik çalamıyorum!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const error2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗ - Şu anda bir sesli kanalda bulunmamaktasınız!**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const error3 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**❗️ - Bulunduğunuz kanala girmem için yeterli iznim yok, gerekli izinleri verdikten sonra lütfen tekrar deneyin.**")
    .setTimestamp()
    .setFooter(`${config.footer}`)

    const error4 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`**❗️ - Bir şeyler ters gitti, **__Lütfen +help__** yazarak botun sahibiyle iletişime geçin... Hata: ${error}.**`)
    .setTimestamp()
    .setFooter(`${config.footer}`)

    switch (error) {
        case 'NotPlaying':
            message.channel.send(error1);
            break;
        case 'NotConnected':
            message.channel.send(error2);
            break;
        case 'UnableToJoin':
            message.channel.send(error3);
            break;
        default:
            message.channel.send(error4);
    };

};
