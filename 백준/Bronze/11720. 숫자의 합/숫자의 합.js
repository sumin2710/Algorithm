let [n, nums] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let sum = nums.split('').map(Number).reduce((a, b) => a + b);
console.log(sum);