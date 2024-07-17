let remains = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number).map((v) => v % 42);
let cnt = [...new Set(remains)];
console.log(cnt.length);