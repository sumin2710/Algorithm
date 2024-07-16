let [n, input, v] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let cnt = input.split(' ').map(Number).filter(a => a === Number(v)).length;
console.log(cnt)