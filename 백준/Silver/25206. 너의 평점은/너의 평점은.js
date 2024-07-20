let input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(' '));

const grade = new Map([
  ["A+", 4.5],
  ["A0", 4.0],
  ["B+", 3.5],
  ["B0", 3.0],
  ["C+", 2.5],
  ["C0", 2.0],
  ["D+", 1.5],
  ["D0", 1.0],
  ["F", 0.0],
]);

let creditSum = 0; // 학점 총합
let classSum = 0; // 전공과목별 합
for (let i = 0; i < 20; i++) {
  let [a, b, c] = input[i];
  if (c == "P") continue;
  creditSum += parseFloat(b);
  classSum += parseFloat(b) * grade.get(c);
}

console.log(classSum / creditSum);
