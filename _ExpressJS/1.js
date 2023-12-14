const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Response from server...!");
    res.send('response from server...'); // in http we use res.end() but here we'll use the res.send()
})

const server = app.listen(5000, () => {
    const port = server.address().port;
    console.log(`server listening at ${port}`);
})