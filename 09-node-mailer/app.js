const express = require('express');
const app = express();
const sendMail = require('./controllers/sendMail');
const PORT = 5000 || process.env.PORT;


app.get('/', (req, res) => {
    res.send('response from the server.');
});

app.get('/sendemail', sendMail);


const start = async () => {
    try {
        app.listen(5000, () => {
            console.log(`i am live at ${PORT}.`);
        });
    } catch( error ) {}
};

start();