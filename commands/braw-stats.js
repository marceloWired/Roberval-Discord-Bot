const notRegisteredEmbed = require('../embeds/notRegistered');
const User = require('../models/User');
const axios = require('axios');
const { brawlhallaApiKey } = require('../config.json');
const brawlhallaEmbedCreator = require('../embeds/brawlhallaStats')
const failBrawlhallaEmbed = require('../embeds/brawlhallaStatsFail')

module.exports = {
    name: 'braw-stats',
    description: 'Retorna suas informações do brawlhalla',
    async execute(message, args) {
        const authorID = message.author.id;
        const user = await User.findOne({ discordID: authorID });

        if (!user) {
            return message.channel.send({ embed: notRegisteredEmbed })
        }

        console.log(user.brawlhallaID);
        const link = `https://api.brawlhalla.com/player/${user.brawlhallaID}/ranked?api_key=${brawlhallaApiKey}`;
        let brawlhallaData;

        await axios.get(link).then(response => {
            brawlhallaData = response.data;
        }).catch(e => {
            console.log(e);
        })

        if (brawlhallaData == {}) {
            return message.channel.send({ embed: failBrawlhallaEmbed })
        }

        const brawlhallaEmbed = brawlhallaEmbedCreator(brawlhallaData.name, brawlhallaData.rating, brawlhallaData.tier, brawlhallaData.peak_rating);

        return message.channel.send({ embed: brawlhallaEmbed });
    }
}