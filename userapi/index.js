const fs = require('fs');

const apiData = fs.readFile('./userapi/api.json', 'utf-8', (err, data) => {
    // console.log(data);
    const obj = JSON.parse(data);
    console.log(obj);
});