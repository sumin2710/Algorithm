let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let answer = '';
for(let i=0; i<n; i++) {
    let [a,b] = input[i].split(' ').map(Number);
    answer += ((a+b) + '\n');
}
console.log(answer)