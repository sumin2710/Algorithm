let [n, arr] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

arr = arr.split(' ').map(Number).sort((a,b) => a-b);

const gcd = (a, b) => {
    while(a % b !== 0) {
        let tmp = a % b;
        a = b;
        b = tmp;
    }
    return b;
}

let count = 0, arr2 = [];
for(let i = 0; i < Number(n) - 1; i++) {
    if(gcd(arr[i], arr[i+1]) > 1) {
        arr2.push([arr[i], arr[i+1]]);
    }
}

for(let [a, b] of arr2) {
    for(let i = a + 1; i < b; i++) {
        if(gcd(a, i) == 1 && gcd(b, i) == 1) {
            count += 1;
            break;
        }
        if(i == b - 1) {
            count += 2;
        }
    }
}

console.log(count);