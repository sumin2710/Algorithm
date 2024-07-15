// A+B, A-B, A*B, A/B(몫), A%B(나머지)
var fs = require('fs');
var [a,b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)