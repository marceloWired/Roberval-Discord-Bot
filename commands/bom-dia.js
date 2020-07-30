const bomDiaEmbed = require('../embeds/bomDia')

module.exports = {
    name: 'bom-dia',
    description: 'Bom dia!',
    execute(message, args) {
        const targetID = message.author.id;
        if (targetID == 263357794470723584) {
            return message.channel.send('Sem bom dia pra vc.');
        }
        return message.channel.send({ embed: bomDiaEmbed })

    }
}