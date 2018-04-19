This repo demostrates how to use Wiremock within WebdriverIO test suites

## ... but why?

You have a downstream dependency that's introducing instablity to your tests.

The server you are connecting to is slooooowwwww and is killing your execution time.

You generally want to keep you tests deterministic.

## How?

Before your tests are executed the expected response is posted to the Wiremock service. [See how it's done here](test.js)

You'll need to inspect the requests that you're application is making and record their response codes, headers & response bodies within your test projects. Do so using any number of method (Chrome tools|Charles Proxy|[...](https://alternativeto.net/software/fiddler/))


**NB.** The AUT should be configured such that it will make requests to the mock service (on localhost here, but could be hosted on an external server/container). In this project both requests through to the service and mocked requests are demostrated & tested, in reality the AUT should only be making requests to Wiremock!


## Usage

- start selenium server: `npm run selenium`

- start wiremock standalone: `npm run wiremock`

- start application: `npm run server`

- run tests: `npm test`
