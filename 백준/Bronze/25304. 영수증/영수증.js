let [price, n, ...input] = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let total = 0;
for(let i=0; i<parseInt(n); i++) {
    let [a,b] = input[i].split(' ').map(Number)
    total += (a*b)
}
if(total === parseInt(price)) {
    console.log('Yes')
}else {
    console.log('No')
}