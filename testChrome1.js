require('chromedriver');
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');

var chrome_options = new chrome.Options()
chrome_options.setChromeBinaryPath('/home/michael/git/webdriver-test/chromedriver/chromedriver')
chrome_options.addArguments('--headless')
chrome_options.addArguments('--no-sandbox')
chrome_options.addArguments('--disable-dev-shm-usage')
//var driver = webdriver.Chrome('/home/michael/git/webdriver-test/chromedriver/chromedriver',
//  chrome_options=chrome_options)

var driver = new webdriver.Builder()
  .forBrowser('chrome')
  .setChromeOptions(chrome_options)
  .build();
  