let [input, ...arr] = require('fs').readFileSync(0, 'utf-8').split('\n');
let [n, m] = input.split(' ').map(Number);
let basket = Array.from({length: n}, (_, i) => i+1);
for(let i=0; i<m; i++) {
    let [a, b] = arr[i].split(' ').map(Number);
    if(a === b) continue;
    let reversed = basket.slice(a-1, b).reverse();
    basket.splice(a-1, reversed.length, ...reversed);
}
console.log(basket.join(' ').trim());