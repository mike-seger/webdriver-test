from selenium import webdriver
from selenium.webdriver.chrome.options import Options

options = Options()
options.binary_location = "C:\\path\\to\\chrome.exe"
driver = webdriver.Chrome(chrome_options = options, executable_path=r'C:\path\to\chromedriver.exe')
driver.get('http://google.com/')
print("Chrome Browser Invoked")
driver.quit()
