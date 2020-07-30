const User = require('../models/User');
const axios = require('axios');
const { brawlhallaApiKey } = require('../config.json');
const { createEmbed, failBrawlhallaEmbed, notRegisteredEmbed, userMentionError } = require('../embeds/brawlhallaStats')
const isEmpty = require('../utils/isEmpty');
const getUserMentioned = require('../utils/getUserMentioned');
const getIcon = require('../utils/getIcon');

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
        if (targetID == 263357794470723584) {
            return message.reply('VOCÊ ESTÁ BANIDO!');
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

        let icon = getIcon(brawlhallaData.tier);

        const winrateAux = (brawlhallaData.wins / brawlhallaData.games);
        const winrate = (winrateAux * 100).toFixed(2) + '%';

        const brawlhallaEmbed = createEmbed(brawlhallaData, winrate, icon);

        return message.channel.send({ embed: brawlhallaEmbed });
    }
}