const findSteamID = require('../utils/findSteamId');
const createUser = require('../utils/createUser');
const User = require('../models/User');
const { errorEmbed, successEmbed, alreadyExistEmbed, incorrectUrlEmbed, loadingEmbed } = require('../embeds/createUser')

module.exports = {
    name: 'cadastrar-steam',
    description: 'Cadastre seu perfil da steam',
    args: true,
    usage: '<linkSteam>',
    async execute(message, args) {

        const authorID = message.author.id;

        const userVerify = await User.findOne({ discordID: authorID });

        if (userVerify) {
            return message.channel.send({ embed: alreadyExistEmbed });
        } else {
            const urlSteam = args[0];

            const verifyUrl = urlSteam.match('https://steamcommunity.com');

            if (!verifyUrl) {
                return message.channel.send({ embed: incorrectUrlEmbed });
            }

            message.channel.send({ embed: loadingEmbed });

            const { steamID64 } = await findSteamID(urlSteam);

            const user = {
                steamID: steamID64,
                discordID: authorID
            };

            const response = await createUser(user);

            if (!response) {
                message.channel.bulkDelete(1, true).catch(err => {
                    console.log(err);
                });
                return message.channel.send({ embed: errorEmbed });
            } else {
                message.channel.bulkDelete(1, true).catch(err => {
                    console.log(err);
                });
                return message.channel.send({ embed: successEmbed });
            }
        }
    }
}
