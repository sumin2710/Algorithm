var fs = require('fs');
var [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = parseInt(A);
let b = B.split('').map(Number);
console.log(a*b[2])
console.log(a*b[1])
console.log(a*b[0])
console.log(a*parseInt(B))
