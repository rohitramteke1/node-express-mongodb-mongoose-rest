const http = require("http");
const fs = require("fs");

const PORT = 8000;
const HOST = "localhost";

const server = http.createServer( (req, res) => {

// 1st way
    // console.log(req.url);
    // fs.readFile("./input.txt", "utf-8", (err, data) => {
    //     if (err) console.log(err);
    //     res.write("Hello World!");
    //     res.end(data);
    // });

// 2nd way
    // const rstream = fs.createReadStream('./input.txt');

    // rstream.on('data', (chunkdata) => {
    //     res.end(chunkdata);
    //     rstream.destroy();
    // })

    // rstream.on('end', () => {
    //     // console.log("All the data in the file has been read");
    //     res.end('data ended.');
    // })

    // rstream.on('error', (err) => {
    //     console.log(err);
    //     res.end('Internal server error.');
    // } );

    // rstream.on('close', () => {
    //     res.end('close.');
    // } );

// 3rd way - best way
    const rstream = fs.createReadStream('./input.txt');
    rstream.pipe(res);

});

server.listen(PORT, HOST, () => {
    console.log(`listening at ${HOST}:${PORT}`);
});
