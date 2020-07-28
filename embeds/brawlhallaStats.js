module.exports = {
    createEmbed: (name, rating, tier, peak_rating, winrate) => {
        let brawlhallaEmbed = {
            color: '#29d426',
            title: `Nome: ${name}`,
            author: {
                name: 'Ranked Status',
                icon_url: 'https://i.imgur.com/P8lmST5.png',
            },
            thumbnail: {
                url: 'https://i.imgur.com/P8lmST5.png',
            },
            fields: [
                {
                    name: 'Tier',
                    value: `${tier}`,
                },
                {
                    name: 'Elo Atual',
                    value: `${rating}`,
                },
                {
                    name: 'Elo Máximo',
                    value: `${peak_rating}`,
                },
                {
                    name: 'Winrate',
                    value: `${winrate}`,
                },
            ],
        }

        return brawlhallaEmbed;
    },
    failBrawlhallaEmbed: {
        color: '#c41212',
        title: 'Falha ao buscar informações',
        author: {
            name: 'Erro',
            icon_url: 'https://i.imgur.com/7qPpz1n.png',
        },
        description: 'Não há partidas ranqueadas registradas nessa season.',
        thumbnail: {
            url: 'https://i.imgur.com/P8lmST5.png',
        }
    },
    notRegisteredEmbed: {
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
    },
    userMentionError: {
        color: '#c41212',
        title: 'Falha ao resgatar informações',
        author: {
            name: 'Erro',
            icon_url: 'https://i.imgur.com/7qPpz1n.png',
        },
        description: 'Você deve mencionar um usuário!',
        thumbnail: {
            url: 'https://i.imgur.com/P8lmST5.png',
        }
    }
}
