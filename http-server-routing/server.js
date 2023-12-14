import http from 'http';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const server = http.createServer( (req, res) => {
    // scope chainnig, that's why it loaded only one time
    const _currentDirectory = path.resolve('');
    const data = fs.readFileSync(`${_currentDirectory}\\userapi\\api.json`, 'utf-8');
    const jsObject = JSON.parse(data);

    console.log(req.url);
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
    else if ( req.url == '/userapi') {
        res.end(jsObject.employees[0].username);
        // res.end(data);
    }
    else {
        res.writeHead(404, 'Page not found', {'Content-type' : 'text/html'});
        res.end('<h1> Error 404. Page not found. </h1>');
    }
});

const localhost = "127.0.0.1";
const port = 8000;

server.listen(port, localhost, () => {
    console.log(chalk.yellow.inverse("server is running at") + ' ' + chalk.blue.inverse(localhost + ':' + port) );
});
