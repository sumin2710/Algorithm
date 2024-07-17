let input = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
let chess = [1, 1, 2, 2, 2, 8];
let answer = '';
for(let i=0; i<input.length; i++) {
    answer += `${chess[i] - input[i]} `;
}
console.log(answer.trim());