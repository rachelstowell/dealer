const puppeteer = require('puppeteer');

describe('Test simple website', () => {
  var server;
  beforeAll(async () => {
    server = require('./index');
    await page.goto('http://127.0.0.1:3000', {
      waitUntil: 'networkidle2'
    }); 
  });

  it('Text appears after button click', async () => {
    await page.click('button');
    await page.waitForSelector('p');
    let element = await page.$('p');
    let value = await page.evaluate(el => el.textContent, element);
    expect(value).toBeTruthy();
  });

  afterAll(() => {
    server.close();
  })

});
