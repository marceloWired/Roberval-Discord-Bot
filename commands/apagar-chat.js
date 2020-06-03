module.exports = {
    name: 'apagar-chat',
    description: 'Apaga o chat',
    args: true,
    usage: '<quantidade linhas>',
    execute(message, args) {
        const quantidade = parseInt(args[0]) + 1;

        if (isNaN(quantidade)) {
            return message.reply("Insira um número válido de 2 a 100.");
        } else if (quantidade <= 1 || quantidade > 100) {
            return message.reply("Insira um número válido de 2 a 100.");
        }

        message.channel.bulkDelete(quantidade, true).catch(err => {
            console.log(err);
            message.channel.send("Houve um erro ao tentar excluir as mensagens");
        });

        message.channel.send(`Últimas ${quantidade - 1} mensagens excluidas com sucesso!`);
    }
}
