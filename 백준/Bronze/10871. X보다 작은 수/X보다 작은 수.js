let [input, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n,x] = input.split(' ').map(Number);
let answer = '';
arr.split(' ').map((v) => {
    if(v < x) {
        answer += v + ' ';
    }
})
console.log(answer.trim());
