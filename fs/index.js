const fs = require('fs');
const { buffer, text } = require('stream/consumers');

fs.writeFileSync('data.txt', 'Hello world...!');
fs.writeFileSync('data.txt', 'Bye Bye World...!');


// const buff_data = fs.readFileSync('data.txt', 'utf-8');

var buff_data = fs.readFileSync('data.txt');
const text_data = buff_data.toString();

console.log(text_data);

fs.appendFileSync('data.txt', 'Appending the data.');
buff_data = fs.readFileSync('data.txt', 'utf-8');
console.log(buff_data);

fs.rename('data.txt', 'text.txt', () => {});