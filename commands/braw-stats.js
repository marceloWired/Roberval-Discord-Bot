const User = require('../models/User');
const axios = require('axios');
const { brawlhallaApiKey } = require('../config.json');
const { createEmbed, failBrawlhallaEmbed, notRegisteredEmbed, userMentionError } = require('../embeds/brawlhallaStats')
const isEmpty = require('../utils/isEmpty');
const getUserMentioned = require('../utils/getUserMentioned');

module.exports = {
    name: 'braw-stats',
    description: 'Retorna suas informações do brawlhalla',
    async execute(message, args) {
        let targetID;
        if (args.length >= 1) {
            const mention = args[0];
            targetID = getUserMentioned(mention);
            if (!targetID) {
                return message.channel.send({ embed: userMentionError });
            }
        } else {
            targetID = message.author.id;
        }

        const user = await User.findOne({ discordID: targetID });

        if (!user) {
            return message.channel.send({ embed: notRegisteredEmbed })
        }

        const link = `https://api.brawlhalla.com/player/${user.brawlhallaID}/ranked?api_key=${brawlhallaApiKey}`;
        let brawlhallaData;

        await axios.get(link).then(response => {
            brawlhallaData = response.data;
        }).catch(e => {
            console.log(e);
        })

        const verifyEmpty = isEmpty(brawlhallaData);

        if (verifyEmpty) {
            return message.channel.send({ embed: failBrawlhallaEmbed });
        }

        const brawlhallaEmbed = createEmbed(brawlhallaData.name, brawlhallaData.rating, brawlhallaData.tier, brawlhallaData.peak_rating);

        return message.channel.send({ embed: brawlhallaEmbed });
    }
}