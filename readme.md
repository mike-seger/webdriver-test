npm install selenium-webdriver
npm install chromedriver --chromedriver_filepath=$(pwd)/chromedriver/chromedriver_linux64.zip

npm install selenium-standalone@latest -g
selenium-standalone install && selenium-standalone start
npm install --save-dev @babel/node

## Usage

- start selenium server: `npm run selenium`

- start wiremock standalone: `npm run start:mock`

- start application: `npm run server`

- run tests: `npm test`


https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebElement.html