const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// const basedir = path.dirname(__dirname);
// const projectDir = path.join(basedir, './public');
// console.log( path.join(__dirname, '../public'));

// NOTE: staticPath using express
// const staticPath = path.join(__dirname, '../public');
// console.log(staticPath);

// app.use(express.static(staticPath));

// using template view engine - connection establishing
const viewPath = path.join(__dirname, '../templates/views');

app.set('views', viewPath);
app.set('view engine', 'hbs');
// console.log( viewPath );

app.use(express.static(viewPath));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about', {
        sender: 'rohit',
        age: 22,
    });    
});

app.get('/about/*', (req, res) => {
    res.render('about', {
        sender: 'rohit',
        age: 22,
    });    
});

app.get('/', (req, res) => {
    res.send('hello from server');
})

const server = app.listen(8000, () => {
    const port = server.address().port;
    console.log(`server running at ${port}`);
});