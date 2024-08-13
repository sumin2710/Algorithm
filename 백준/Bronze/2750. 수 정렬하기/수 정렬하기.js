let [n, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
let arr = [...new Set(input)].sort((a, b) => a - b);
console.log(arr.join('\n'));