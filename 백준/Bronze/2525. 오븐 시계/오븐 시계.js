var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var [h, m] = input[0].split(' ').map(Number);
var min = parseInt(input[1]);

let H = h, M = m + min;
if(M >= 60) {
    H += parseInt(M / 60);
    M %= 60;
}
if(H > 23) {
    H -= 24;
}
console.log(`${H} ${M}`)