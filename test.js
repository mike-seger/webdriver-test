import assert from 'assert';
//import http from 'superagent';
//import superagentPromisePlugin from 'superagent-promise-plugin';

const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
require('chromedriver');
 
describe('Can mock api responses', function () {
    var driver;
    before(function () {
        this.timeout(10000);

        let options = new chrome.Options();
        options.addArguments('--headless');
        options.addArguments('--disable-gpu');
        options.addArguments('--window-size=1280,960');
        driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

//        driver.get('http://google.com');
        console.log('Hello Google');
//        return driver;
    });

    it('should return body of "joe bloggs" when accessing the server', () => {
        driver.get('http://localhost:3000')
        driver.findElement(By.tagName('body')).getText()
            .then(body => {
                assert(body === 'joe bloggs',
                    body + ' does not equal joe bloggs');
            })
            .catch(function(err) {
                //console.log(err);
            })
        }
    );

    after(() => driver.quit());
});
