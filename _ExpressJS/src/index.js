const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { error } = require('console');

const app = express();

// console.log(process.cwd());
// console.log(path.resolve());
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const publicPath = path.join(__dirname, '../public/css');
const imagePath = path.join(__dirname, '../public/images');
const localhost = "localhost";
const port = process.env.PORT || 8000;
// set the partials here
hbs.registerPartials(partialsPath);

// testing purpose
console.log(partialsPath);
console.log(viewsPath);
console.log(publicPath);
console.log(imagePath);

app.set('view engine', 'hbs');
app.set('views', viewsPath);

// load the static files
// app.use(express.static(viewsPath));
app.use('/css', express.static(publicPath));
app.use('images', express.static(imagePath));

app.get('/', (req, res) => {
    res.render('index', {
        'page':'home'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        'page': 'about',
    });
});

app.get("/about/*", (req, res) => {
    res.render('error', {
        'page': 'about',
        'errorText':'this about page is not found',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        'page': 'help',
    });
})

app.get('/contact', (req, res) => {
    res.render('contact', {
        'page': 'contact',
    });
})

// error page => Top To Down express-js i think
app.get('*', (req, res) => {
    res.render('error', {
        'page': 'error',
        'errorText': 'page not found',
    });
})

const server = app.listen(port, () => {
    console.log(`listening from server http://${localhost}:${port}`);
});