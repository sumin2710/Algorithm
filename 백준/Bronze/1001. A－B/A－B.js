// 3 2
var fs = require('fs')
var [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(A-B);