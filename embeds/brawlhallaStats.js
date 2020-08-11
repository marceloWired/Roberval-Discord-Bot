module.exports = {
    createEmbed: (brawlhallaData, winrate, icon, duoInfo) => {
        let brawlhallaEmbed = {
            color: '#29d426',
            author: {
                name: 'Ranked Status',
                icon_url: 'https://i.imgur.com/P8lmST5.png',
            },
            thumbnail: {
                url: icon,
            },
            fields: [
                {
                    name: 'Nick',
                    value: `${brawlhallaData.name}`,
                    inline: true,
                },
                {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                },
                {
                    name: 'Melhor duo',
                    value: `${duoInfo.teamname}`,
                    inline: true
                },
                {
                    name: 'Tier',
                    value: `${brawlhallaData.tier}`,
                    inline: true,
                },
                {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                },
                {
                    name: 'Tier (duo)',
                    value: `${duoInfo.tier}`,
                    inline: true
                },
                {
                    name: 'Elo Atual',
                    value: `${brawlhallaData.rating}`,
                    inline: true,
                },
                {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                },
                {
                    name: 'Elo Atual (duo)',
                    value: `${duoInfo.rating}`,
                    inline: true,
                },
                {
                    name: 'Elo Máximo',
                    value: `${brawlhallaData.peak_rating}`,
                    inline: true
                },
                {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                },
                {
                    name: 'Elo Máximo (duo)',
                    value: `${duoInfo.peak_rating}`,
                    inline: true
                },
                {
                    name: 'Winrate',
                    value: `${winrate}`,
                },


            ],
        }

        return brawlhallaEmbed;
    },
    createEmbedSolo: (brawlhallaData, winrate, icon) => {
        let brawlhallaEmbed = {
            color: '#29d426',
            author: {
                name: 'Ranked Status',
                icon_url: 'https://i.imgur.com/P8lmST5.png',
            },
            thumbnail: {
                url: icon,
            },
            fields: [
                {
                    name: 'Nick',
                    value: `${brawlhallaData.name}`,
                },
                {
                    name: 'Tier',
                    value: `${brawlhallaData.tier}`,
                },
                {
                    name: '\u200B',
                    value: '\u200B',
                    inline: true
                },
                {
                    name: 'Elo Atual',
                    value: `${brawlhallaData.rating}`,
                },
                {
                    name: 'Elo Máximo',
                    value: `${brawlhallaData.peak_rating}`,
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
