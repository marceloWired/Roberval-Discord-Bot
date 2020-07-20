const findSteamID = require('../utils/findSteamId');

module.exports = {
    name: 'cadastrar-steam',
    description: 'Cadastre seu perfil da steam',
    args: true,
    usage: '<linkSteam>',
    async execute(message, args) {
        const urlSteam = args[0];

        const result = await findSteamID(urlSteam);
        
        return message.reply(`Seu ID da steam é ${result.steamID64}`);
    }
}