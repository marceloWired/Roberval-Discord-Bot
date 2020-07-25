module.exports = {
    successEmbed: {
        color: '#29d426',
        title: 'Usuário criado com sucesso!',
        author: {
            name: 'Sucesso',
            icon_url: 'https://i.imgur.com/WX67KSA.png',
        },
        description: 'Deu tudo certo com a criação do seu usuário',
        thumbnail: {
            url: 'https://i.imgur.com/WX67KSA.png',
        }
    },
    failEmbed: {
        color: '#c41212',
        title: 'Falha ao criar o usuario!',
        author: {
            name: 'Erro',
            icon_url: 'https://i.imgur.com/7qPpz1n.png',
        },
        description: 'Houve um erro ao criar seu usuário, por favor tente novamente!',
        thumbnail: {
            url: 'https://i.imgur.com/7qPpz1n.png',
        }
    },
    alreadyExistEmbed: {
        color: '#c41212',
        title: 'Houve um erro com a criação do seu usuário',
        author: {
            name: 'Erro',
            icon_url: 'https://i.imgur.com/7qPpz1n.png',
        },
        description: 'Você já criou um usuário!',
        thumbnail: {
            url: 'https://i.imgur.com/7qPpz1n.png',
        }
    },
}