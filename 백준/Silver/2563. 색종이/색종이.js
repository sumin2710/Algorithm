let [n, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split("\n");
const paper = Array.from({length: 100}, () => Array(100).fill(-1));
let answer = 0;
for(let idx = 0; idx < parseInt(n); idx++) {
    let [x, y] = input[idx].split(' ').map(Number);
    for(let i = x; i < x+10; i++) {
        for(let j = y; j < y+10; j++) {
            if(paper[i][j] === -1) {
                paper[i][j] = 1;
                answer++;
            }
        }
    }
}
console.log(answer);