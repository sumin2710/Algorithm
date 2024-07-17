let [firstLine, ...arr] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [n, m] = firstLine.split(' ').map(Number);
let basket = Array.from({length: n}, (_, i) => i+1);
for(let i=0; i<m; i++) {
    let [a, b] = arr[i].split(' ').map(Number);
    let tmp = basket[a-1];
    basket[a-1] = basket[b-1];
    basket[b-1] = tmp;
}
console.log(basket.join(' ').trim());