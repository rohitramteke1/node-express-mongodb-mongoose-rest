const http = require('http');


const HOST = "localhost";
const PORT = 8000;

const server = http.createServer( (req, res) => {
    console.log(req.url);
    res.end('response from server');
});


server.listen(PORT, HOST, ()=> {
    console.log(`server running at ${HOST}:${PORT}`);
})