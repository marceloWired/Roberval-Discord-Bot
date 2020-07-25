function createEmbed(name, rating, tier, peak_rating) {
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
        ],
    }

    return brawlhallaEmbed;
}

module.exports = createEmbed;



