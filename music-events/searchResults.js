const config = require("../config.json")

module.exports = (client, message, query, tracks) => {

    message.channel.send({
        embed: {
            color: 'RANDOM',
            author: { name: `${query} için bulunan sonuçlar;` },
            footer: { text: `${config.footer}`},
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });

};