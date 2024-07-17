let input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let answer = '';
for(let i=1; i<input.length; i++) {
    let [r, s] = input[i].split(' ');
    answer += s.split('').map(v => v.repeat(Number(r))).join('') + '\n';
}
console.log(answer.trim());