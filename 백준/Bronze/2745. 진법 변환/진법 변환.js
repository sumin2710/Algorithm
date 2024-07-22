let [n, b] = require('fs').readFileSync(0, 'utf-8').trim().split(' ');
console.log(parseInt(n, +b));