const config = require("../config.json")
const log = message => {
  
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`${config.prefix}help | ${config.prefix}play`, {
type: "STREAMING",
url: "https://www.twitch.tv/klanter"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
