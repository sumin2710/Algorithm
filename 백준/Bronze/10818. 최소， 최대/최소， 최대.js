let [n, arr] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
arr = arr.trim().split(' ').map(Number);
console.log(Math.min(...arr) + ' ' + Math.max(...arr))