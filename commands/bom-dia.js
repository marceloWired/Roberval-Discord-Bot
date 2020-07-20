module.exports = {
    name: 'bom-dia',
    description: 'Bom dia!',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`Bom dia amigo!`);  
        }
        message.channel.send(`Bom dia amigo!\nSeus argumentos foram: ${args}`);
    }
}