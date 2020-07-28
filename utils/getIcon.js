function getIcon(str) {
    switch (true) {
        case str.includes("Gold"):
            return 'https://i.imgur.com/4vXN1Q5.png'
        case str.includes("Platinum"):
            return 'https://i.imgur.com/bFaiAt1.png'
        case str.includes("Diamond"):
            return 'https://i.imgur.com/TWZqoIl.png'
        default:
            return 'https://i.imgur.com/IYKpb9V.png'
    }
}

module.exports = getIcon;