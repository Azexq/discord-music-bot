const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fs = require("fs");
const { Player } = require('discord-player');

client.on("ready", async () => {
  console.log(`BOT: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`)
});

const log = message => {
  console.log(` ${message}`);
};
require("./eventLoader.js")(client);
const player = new Player(client);
client.player = player;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir('./music-events/', (err, klanti) => {
  if (err) return console.error(err);
  klanti.forEach(file => {
      const event = require(`./music-events/${file}`);
      let eventName = file.split(".")[0];
      console.log(`Music eventleri yükleniyor ${eventName}`);
      client.player.on(eventName, event.bind(null, client));
  });
});
fs.readdir("./commands/", (err, klanti) => {
  if (err) console.error(err);
  log(`${klanti.length} komut yüklenecek.`);
  klanti.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.login(process.env.TOKEN || config.token).then(console.log(`Bot başarıyla giriş yaptı!`)).catch(console.error("Bota giriş yapılırken başarısız olundu tokeni dogru girdigine emin misin ?"));