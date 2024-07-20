let [size, ...elements] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [n, m] = size.split(' ').map(Number);
// 입력하기
let a = [],
  b = [];
for (let i = 0; i < elements.length; i++) {
  let tmp = elements[i].split(" ").map(Number); 
  if (i < n) {
    a.push(tmp);
  } else {
    b.push(tmp);
  }
}

// 더하기
let answer = "";
for (let i = 0; i < n; i++) {
  let tmp = "";
  for (let j = 0; j < m; j++) {
    tmp += a[i][j] + b[i][j] + " ";
  }
  answer += tmp.trim() + "\n";
}
console.log(answer.trim());
