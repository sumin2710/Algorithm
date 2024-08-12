let n = require('fs').readFileSync(0, 'utf-8').trim();
n = Number(n);

let width = 2;
for(let i = 1; i <= n; i++) {
    width += 2 ** (i-1);
}
console.log(width*width);