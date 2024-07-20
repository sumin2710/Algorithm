let numbers = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' ').map(Number));
let max = 0,
  rowIdx = 0,
  colIdx = 0; // 행, 열
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (max < numbers[i][j]) {
      max = numbers[i][j];
      rowIdx = i;
      colIdx = j;
    }
  }
}
console.log(`${max}\n${rowIdx + 1} ${colIdx + 1}`);