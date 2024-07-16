let n = require('fs').readFileSync('/dev/stdin').toString();
let answer = '';
for(let i=1; i<=n; i++) {
    for(let j=1; j<=n-i; j++) {
        answer += ' '
    }
    for(let j=1; j<=i; j++) {
        answer += '*'
    }
    answer += '\n'
}
console.log(answer)