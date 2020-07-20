const puppeteer = require('puppeteer');

module.exports = {
    name: 'converter',
    description: 'Converte moedas',
    args: true,
    usage: '<moedaBase> <moedaFinal>',
    async execute(message, args) {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const moedaBase = args[0];
        const moedaFinal = args[1];
        const link = `https://www.google.com/search?sxsrf=ALeKk02x7fXZPqrGjDAbBL6tv5LMKqeu5Q%3A1591196652992&ei=7LvXXsLzO7vO5OUP9rufkA8&q=${moedaBase}+para+${moedaFinal}&oq=${moedaBase}+para+${moedaFinal}&gs_lcp=CgZwc3ktYWIQAzIKCAAQgwEQRhCCAjIFCAAQsQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoHCAAQgwEQQzoECAAQQzoFCAAQgwE6BAgjECc6CggAELEDEEYQggJQuLIWWKbAFmDVwBZoAHAAeACAAZkBiAHzC5IBAzUuOZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&ved=0ahUKEwjCmZO69eXpAhU7J7kGHfbdB_IQ4dUDCAw&uact=5`

        await page.goto(link);
        const resultado = await page.evaluate(() => {
            return {
                valor: document.querySelector(".a61j6.vk_gy.vk_sh.Hg3mWc").value,
                nomeMoedaBase: document.querySelector('.vLqKYe').innerHTML,
                nomeMoedaFinal: document.querySelector('.MWvIVe').innerHTML,
            }
        })
        page.close();
        message.reply(`1 ${resultado.nomeMoedaBase} equivale a ${resultado.valor} ${resultado.nomeMoedaFinal}`);

    }
}