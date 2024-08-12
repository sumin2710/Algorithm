let [a, b, v] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim().split(' ').map(Number);

let dist = v - b, distInDay = a - b;
console.log(Math.ceil(dist/distInDay))