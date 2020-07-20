const User = require('../models/User');
const axios = require('axios');
const { brawlhallaApiKey } = require('../config.json');
const { create } = require('../models/User');

async function createUser(steamID){
    let brawlhallaData;
    
    console.log(steamID, brawlhallaApiKey);
    await axios.get(`https://api.brawlhalla.com/search?steamid=${steamID}&api_key=${brawlhallaApiKey}`)
    .then(response =>{
        console.log
        brawlhallaData = response.data;
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = createUser;
