import * as driver from 'webdriverio';
import assert from 'assert';
import http from 'superagent';
import superagentPromisePlugin from 'superagent-promise-plugin';

describe('Can mock api responses', function () {
    let client;
    before(function () {
        this.timeout(10000);
        client = driver.remote(
        {
            desiredCapabilities: {
                'browserName': 'chrome',
                'chromeOptions': {
                    'binary': "/home/michael/git/webdriver-test/chromedriver/chromedriver",
                    "args": ['--headless', '--disable-gpu', '--window-size=1280,800']
                }
            }
        }
        );
        return client.init();
    });

    it('should return body of "joe bloggs" when accessing the server', () =>
        client
            .url('http://localhost:3000')
            .getText('body')
            .then(body => {
                assert(body === 'joe bloggs',
                    body + ' does not equal joe bloggs');
            })
    );

    it('should return body of "jane doe" when pointing at the mock', () =>
        http
            .post('http://localhost:8080/__admin/mappings/new')
            .use(superagentPromisePlugin)
            .send({
                request: {
                    url: "/api/user",
                    method: "GET"
                },
                response: {
                    status: 200,
                    "headers": {
                        "access-control-allow-origin": "*",
                        "content-type": "application/json"
                    },
                    "jsonBody": {
                        "firstName": "jane",
                        "surname": "doe"
                    }
                }
            })
            .then(() =>
                client
                    .url('http://localhost:3000/mocked')
                    .getText('body')
                    .then(body => {
                        assert(body === 'jane doe',
                            body + ' does not equal jane doe');
                    }))
    );

    after(() => client.end());
});

