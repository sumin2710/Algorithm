let n = require('fs').readFileSync('/dev/stdin').toString();
let answer = ''
for(let i=0; i<parseInt(n/4); i++) {
    answer += 'long ';
}
console.log(answer += 'int')