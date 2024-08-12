let n = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map((v) => v.split(' ').map(Number));

for (let [x, y] of n) {
  if (x === 0 && y === 0) {
    break;
  }
  if (y % x === 0) {
    console.log('factor');
  } else if (x % y === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
}