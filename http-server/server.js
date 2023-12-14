import http from 'http';
import chalk from 'chalk';

const server = http.createServer( (req, res) => {
    res.end('Hello from the other sides');
});

const localhost = "127.0.0.1";
const port = 8000;

server.listen(port, localhost, () => {
    console.log(chalk.yellow.inverse("server is running at ") + chalk.blue.inverse(localhost + ':' + port) );
});
