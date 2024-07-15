var [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let prize = 0
if(a === b && b === c) {
    prize = 10000 + a * 1000
}else if(a !== b && b !== c && a !== c) {
    prize = Math.max(a,b,c) * 100
}else if(a === b && b !== c) {
    prize = 1000 + a * 100
}else if(a === c && b !== c) {
    prize = 1000 + a * 100
}else if(b === c && a !== b) {
    prize = 1000 + b * 100
}
console.log(prize)