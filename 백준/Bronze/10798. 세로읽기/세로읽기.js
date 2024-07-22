let input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(v => v.split(''));
let answer = '';
let maxRowLength = Math.max(...input.map(v => v.length));
for(let i = 0; i < maxRowLength; i++) {
    for(let j = 0; j < input.length; j++) {
        answer += input[j][i] ? input[j][i] : '';
    }
}
console.log(answer);