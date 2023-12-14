const { add, sub, mul, div, rem, name} = require('./module');

console.log('add: ', add(5,5));
console.log('sub: ', sub(5,5));
console.log('mul: ', mul(5,5));
console.log('div: ', div(5,5));
console.log('rem: ', rem(5,5));

console.warn(name);