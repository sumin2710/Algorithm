let input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
let idx = 0, max = 0;
for(let i=0; i<input.length; i++) {
    if(max < input[i]) {
        max = input[i];
        idx = i;
    }
}
console.log(`${max}\n${idx+1}`);