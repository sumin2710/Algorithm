let input = require('fs').readFileSync(0, 'utf-8').trim();
let n = Number(input), answer = 0;
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        for(let k = 1; k <= n; k++) {
            if(i+j+k === n && k >= j+2 && i % 2 === 0) {
                answer += 1;
            }
        }
    }
}
console.log(answer);