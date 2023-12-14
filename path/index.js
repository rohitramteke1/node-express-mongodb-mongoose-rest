const path = require('path');

// console.log(path.dirname('G:/REACT Node-Js/path/index.js'));
// console.log(path.extname('G:/REACT Node-Js/path/index.js'));
// console.log(path.basename('G:/REACT Node-Js/path/index.js'));

const pathname = 'G:/REACT Node-Js/path/index.js';
const parse = path.parse(pathname);
console.log(parse);