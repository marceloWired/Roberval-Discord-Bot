const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    discordID : Number,
    brawlhallaID: Number
})

module.exports = mongoose.model('User', User);
