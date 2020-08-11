const bomDiaEmbed = require('../embeds/bomDia')

module.exports = {
    name: 'bom-dia',
    description: 'Bom dia!',
    execute(message, args) {
        return message.channel.send({ embed: bomDiaEmbed })

    }
}