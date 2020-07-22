const findSteamID = require('../utils/findSteamId');
const createUser = require('../utils/createUser');
const User = require('../models/User');

module.exports = {
    name: 'cadastrar-steam',
    description: 'Cadastre seu perfil da steam',
    args: true,
    usage: '<linkSteam>',
    async execute(message, args) {
        const urlSteam = args[0];

        const { steamID64 } = await findSteamID(urlSteam);
        
        const user = {
            steamID : steamID64,
            discordID : message.author.id
        };
        
        const userVerify = await User.findOne({discordID: user.discordID});

        if(!userVerify){
            const response = await createUser(user);
            if(response){
                message.reply('Usuário criado com sucesso!');
            }else {
                message.reply('Houve um erro ao cadastrar usuário. Tente novamente mais tarde');
            }
        }else {
            message.reply('Você já cadastrou um usuario!')
        }   
    }
}