const puppeteer = require('puppeteer');

async function findSteam64(steamUrl){
    const browser = await puppeteer.launch({
        headless: true,
    });
    const page = await browser.newPage();
    const link = 'https://steamrep.com/';

    await page.goto(link);
    const InputLink = await page.waitForXPath('/html/body/div[2]/div/div[4]/div/span/div[2]/form/div[2]/input[1]');
    const loginBtn = await page.waitForXPath('/html/body/div[2]/div/div[4]/div/span/div[2]/form/div[2]/input[2]');
    await InputLink.type(steamUrl);
    await loginBtn.click(); 
    
    await page.waitForNavigation(); 

    const result = await page.evaluate(()=>{
        return {
            steamID64: document.querySelector('#findid').value
        }
    })
    browser.close();
    return result;
}

module.exports = findSteam64;
