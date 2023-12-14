const os = require('os');

const arch = os.arch();
const platform = os.platform();
const freemem = os.freemem();
const totalmem = os.totalmem();
const cpus_length = os.cpus().length;


console.log('hostname: ', os.hostname());
console.log('Architecture: ', arch);
console.log('Platform: ', platform);
console.log('Free Memory: ', freemem/1024/1024/1024);
console.log('Total Memory: ', totalmem/1024/1024/1024);
console.log('CPU Cores: ', cpus_length);
console.log('Temp folder: ', os.tmpdir());
console.log('User Info: ', os.userInfo());
console.log('Operating system: ', os.type());