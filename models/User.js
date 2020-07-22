const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema ({
    discordID : String,
    brawlhallaID: String
})

module.exports = mongoose.model('User', User);
