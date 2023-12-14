// Routing in express.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('response from server');
    res.send('response from the server.');
})

app.get('/about', (req, res) => {
    console.log('about page');
    res.send('about page');
});

app.get('/contact', (req, res) => {
    console.log('contact page');
    res.send('contact page');
});

app.get('/temp', (req, res) => {
    console.log('temp page');
    res.send('temp page');
});

app.get('/*', (req, res) => {
    console.log('error page');
    res.status(404).send('<h1>Error page</h1>');
});

const server = app.listen(8000, () => {
    const PORT = server.address().port;
    console.log(`listening at ${PORT}.`);
})