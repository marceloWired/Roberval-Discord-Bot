const findSteamID = require('../utils/findSteamId');
const createUser = require('../utils/createUser');
const User = require('../models/User');
const { errorEmbed, successEmbed, alreadyExistEmbed } = require('../embeds/createUser')

module.exports = {
    name: 'cadastrar-steam',
    description: 'Cadastre seu perfil da steam',
    args: true,
    usage: '<linkSteam>',
    async execute(message, args) {

        const authorID = message.author.id;

        const userVerify = await User.findOne({ discordID: authorID });

        if (!userVerify) {
            const urlSteam = args[0];

            const { steamID64 } = await findSteamID(urlSteam);

            const user = {
                steamID: steamID64,
                discordID: authorID
            };

            const response = await createUser(user);

            if (!response) {
                message.channel.send({ embed: errorEmbed });
            } else {
                message.channel.send({ embed: successEmbed });
            }
        } else {
            message.channel.send({ embed: alreadyExistEmbed });
        }
    }
}
