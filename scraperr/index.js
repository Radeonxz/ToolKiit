const cheerio = require('cheerio');
const got = require('got');

const url = 'https://www.newegg.ca/msi-radeon-rx-5700-xt-rx-5700-xt-gaming/p/N82E16814137474?Description=5700%20xt&cm_re=5700_xt-_-14-137-474-_-Product';


console.log('0000000000');
const request = async () => {
  console.log('11111111111');
  const response = await got(url);
  const $ = cheerio.load(response.body);

  console.log($('price-current')[0]);
}

request();