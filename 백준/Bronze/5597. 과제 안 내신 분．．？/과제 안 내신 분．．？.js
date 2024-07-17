let input = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);
let attend = new Array(30).fill(0);
for(let i=0; i<30; i++) {
    attend[input[i]-1] = 1;
}
console.log(`${attend.indexOf(0)+1}\n${attend.lastIndexOf(0)+1}`);