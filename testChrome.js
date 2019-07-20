from selenium import webdriver

chrome_options = Options()
chrome_options.add_argument('--headless')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--disable-dev-shm-usage')
d = webdriver.Chrome('/home/michael/git/webdriver-test/chromedriver/chromedriver',
    chrome_options=chrome_options)
d.get('https://www.google.com/')