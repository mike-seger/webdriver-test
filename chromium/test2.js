const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
require('chromedriver');
 
async function start() {
    let options = new chrome.Options();
//    options.setChromeBinaryPath('/home/michael/git/webdriver-test/chromedriver/chromedriver');
//    options.setChromeBinaryPath('/home/michael/git/webdriver-test/node_modules/chromium/lib/chromium/chrome-linux/chrome');
    options.setChromeBinaryPath('/usr/bin/google-chrome');
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--window-size=1280,960');
 
    const driver = await new webdriver.Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
        
    await driver.get('http://google.com');
    console.log('Hello Google!');
    await takeScreenshot(driver, 'google-start-page');
    
    await driver.quit();
}
 
async function takeScreenshot(driver, name) {
    await driver.takeScreenshot().then((data) => {
        fs.writeFileSync(name + '.png', data, 'base64');
        console.log('Screenshot is saved');
    });
}
 
start();
