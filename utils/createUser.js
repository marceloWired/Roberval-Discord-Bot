const User = require('../models/User');
const axios = require('axios');
const { brawlhallaApiKey } = require('../config.json');

async function createUser(user){
    let brawlhallaData;
    
    const link = `https://api.brawlhalla.com/search?steamid=${user.steamID}&api_key=${brawlhallaApiKey}`
    await axios.get(link)
    .then(response =>{
        brawlhallaData = response.data;
        user.brawlhallaID = brawlhallaData.brawlhalla_id.toString();
        console.log(user)
    }).catch((error)=>{
        console.log(error);
    })

    try{
        await User.create({
            discordID : user.discordID,
            brawlhallaID : user.brawlhallaID
        })
    }catch(e){
        console.log(e);
        return false;
    }

    return true;
}

module.exports = createUser;
