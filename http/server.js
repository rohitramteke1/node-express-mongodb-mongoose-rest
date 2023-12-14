const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    const url = req.url;
    if (req.url == '/') {
        res.end('Home page');
    }
    else if (req.url == '/home') {
        res.end('Home page');
    } 
    else if ( req.url == '/about') {
        res.end('About page');
    }
    else if ( req.url == '/help') {
        res.end('Help page');
    }
    else if ( req.url == '/contact') {
        res.end('Contact page');
    }
    else if ( req.url == '/userapi' ) {
        fs.readFile(`${__dirname}\\userapi\\api.json`, 'utf-8', (err, data) => {
            // console.log(data);
            res.end(data);
        });
    }
    else {
        res.writeHead(404, 'Page not found', {'Content-type' : 'text/html'});
        res.end('<h1> Error 404. Page not found. </h1>');
    }
});


const port = 8000;
const localhost = "127.0.0.1";

server.listen(port, localhost, () => {
    console.log(`server running at ${localhost}:${port}`);
})