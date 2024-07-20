let n = require('fs').readFileSync(0, 'utf-8').trim();
n = parseInt(n);
let tmp = 2 * n - 1;
// 상단
let answer = "";
for (let i = n - 1; i >= 0; i--) {
  answer += " ".repeat(i) + "*".repeat(tmp - 2 * i) + "\n";
}
// 하단
for (let i = 1; i <= n - 1; i++) {
  answer += " ".repeat(i) + "*".repeat(tmp - 2 * i);
  if (i !== n - 1) answer += "\n";
}
console.log(answer);
