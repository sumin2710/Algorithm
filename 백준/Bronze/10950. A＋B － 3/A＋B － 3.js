let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for(let i=0; i<n; i++) {
    let [a,b] = input[i].split(' ').map(Number);
    console.log(a+b)
}