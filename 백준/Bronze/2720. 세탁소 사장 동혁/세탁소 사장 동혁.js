let [t, ...c] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
let answer = '', coin = [25, 10, 5, 1];
for(let i = 0; i < t; i++) {
    let count = [0,0,0,0], remain = c[i];
    for(let j = 0; j < 4; j++) {
        count[j] = parseInt(remain / coin[j]);
        remain %= coin[j];
    }
    answer += count.join(' ') + '\n';
}
console.log(answer.trim());