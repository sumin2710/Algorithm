let [n, ...arr] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
console.log([...new Set(arr)].sort((a,b) => a-b).join('\n'))