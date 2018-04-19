import express from 'express';
import bodyParser from 'body-parser'

let app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.htm');
});

app.get('/mocked', (req, res) => {
    res.sendFile(__dirname + '/indexMocked.htm');
});

app.get('/api/user', (req, res) => {
    res.send({
        firstName: 'joe',
        surname: 'bloggs'
    });
});

app.listen(3000);