let [x,y] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
console.log(x*y)