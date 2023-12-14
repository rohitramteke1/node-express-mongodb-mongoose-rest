const fs = require('fs');

const data = {
    name: "rohit",
    job: "developer/trader",
    salary: "1.2M USD",
}

// object to JSON using stringify
const jsonData = JSON.stringify(data);
console.log(jsonData);

fs.writeFile('data1.json', jsonData, (err) => {
    console.log('done');
});

fs.readFile('data1.json', 'utf-8', (err, res) => {
    console.log(res);
    const orgData = JSON.parse(res);
    console.log(orgData);
});