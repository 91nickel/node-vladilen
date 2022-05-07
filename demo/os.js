const os = require('os');

console.log('OS', os.platform());
console.log('CPU Arch', os.arch());
console.log('CPU info', os.cpus());
console.log('Free memory', os.freemem());
console.log('Total memory', os.totalmem());
console.log('Home directory', os.homedir());
console.log('System active time', os.uptime());
