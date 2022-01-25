const os = require('os');

// Platform
console.log('Plataform', os.platform());

// CPU Arch
console.log('CPU Arch', os.arch());

// Core Info
console.log('Core Info', os.cpus());

// Free Memory
console.log('Free Memory', os.freemem());

// Total Memory
console.log('Total Memory', os.totalmem());

