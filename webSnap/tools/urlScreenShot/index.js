const fs = require("fs");
const puppeteer = require("puppeteer");

exports.urlScreenShot = async html => {
  try {
    let browser = await puppeteer.launch({ headless: false });
    let page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
    await page.goto(html);
    await page.screenshot({
      path: "./screenshot/image.jpg",
      type: "jpeg",
      fullPage: true
    });
    await page.close();
    await browser.close();
  } catch (err) {
    console.error(err);
  }
};
