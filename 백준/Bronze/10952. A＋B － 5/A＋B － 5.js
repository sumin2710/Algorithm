let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i=0, answer = ''
while(true) {
    let [a,b] = input[i++].split(' ').map(Number);
    if(a === 0 && b === 0) {
        console.log(answer);
        break;
    }
    answer += a+b + '\n';
}