const fs = require('fs');
const Discord = require('discord.js');
const mongoose = require('mongoose');
const { token, prefix } = require('./config.json');
const { mongodbUrlConnect } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    //setando um novo item na collection client
    //sendo a key com o nome do campo e o valor com o modulo exportado
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

// starting database connect
mongoose.connect(mongodbUrlConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    if (command.args && !args.length) {
        let reply = "Você não passou nenhum parametro.";

        if (command.usage) {
            reply += `\nO uso do comando deve ser feito da seguinte maneira: ${prefix}${command.name} ${command.usage}`;
        }

        return message.reply(reply);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('Houve um erro ao executar o comando');
    }

});

client.login(token);
