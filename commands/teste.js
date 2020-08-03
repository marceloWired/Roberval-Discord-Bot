const Discord = require("discord.js");

module.exports = {
    name: 'alo',
    description: 'Bom dia!',
    async execute(message, args) {
        let msg = await message.author.send("me chamou mano?");
        await msg.react('👍');
        await msg.react('👎');

        const filter = (reaction, user) => {
            return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        const collector = await new Discord.ReactionCollector(msg, filter, { max: 1 });
        collector.on('collect', r => {
            if (r.emoji.name == '👍') {
                return message.author.send('opa to aqui então pode falar')
            } else {
                return message.author.send('eita, engano meu então, vlw mano');
            }
        });
        // collector.on('end', collected => console.log(collected.size));

    }
}