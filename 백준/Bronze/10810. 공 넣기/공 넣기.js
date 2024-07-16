let [firstLine, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n')
let [n, m] = firstLine.split(' ').map(Number);
let basket = new Array(n).fill(0);
for(let h=0; h<m; h++) {
    let [i, j, k] = input[h].split(' ').map(Number);
    for(let l=i; l<=j; l++) {
        basket[l-1] = k;
    }
}
console.log(basket.join(' ').trim());