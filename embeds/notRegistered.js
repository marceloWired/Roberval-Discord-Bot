const notRegisteredEmbed = {
    color: '#c41212',
    title: 'Falha ao resgatar informações',
    author: {
        name: 'Erro',
        icon_url: 'https://i.imgur.com/7qPpz1n.png',
    },
    description: 'Você não cadastrou seu perfil ainda!',
    thumbnail: {
        url: 'https://i.imgur.com/P8lmST5.png',
    },
    fields: [
        {
            name: '\u200B',
            value: '\u200B'
        },
        {
            name: 'Para fazer seu cadastro, utilize ',
            value: '_cadastrar-steam <linkSteam>'
        }
    ]
}

module.exports = notRegisteredEmbed;



