let input = require('fs').readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

for (let i = 0; i < input.length - 1; i++) {
  let [x, y, z] = input[i].sort((a, b) => a - b);
  if (x + y <= z) {
    console.log('Invalid');
  } else if (x === y && y === z) {
    console.log('Equilateral');
  } else if (x !== y && y !== z && x !== z) {
    console.log('Scalene');
  } else {
    console.log('Isosceles');
  }
}
