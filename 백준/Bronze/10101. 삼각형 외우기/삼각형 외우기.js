let [a, b, c] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);

if (a === 60 && b === 60 && c === 60) {
  console.log('Equilateral');
} else if (a + b + c === 180) {
  if (a !== b && b !== c && a !== c) {
    console.log('Scalene');
  } else {
    console.log('Isosceles');
  }
} else {
  console.log('Error');
}
