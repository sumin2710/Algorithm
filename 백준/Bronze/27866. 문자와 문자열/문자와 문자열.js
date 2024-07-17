let [s, i] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
console.log(s[Number(i) - 1])