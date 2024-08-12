let [x, y, z] = require('fs').readFileSync(0, 'utf-8')
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let answer = x + y;
if (answer > z) {
  answer += z;
} else {
  answer += answer - 1;
}

console.log(answer);
