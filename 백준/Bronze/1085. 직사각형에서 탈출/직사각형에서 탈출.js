let [x,y,w,h] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const distances = [];

distances.push(w-x);
distances.push(x-0);
distances.push(h-y);
distances.push(y-0);
console.log(distances.sort((a, b) => a - b)[0]);