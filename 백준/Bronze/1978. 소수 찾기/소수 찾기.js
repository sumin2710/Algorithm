let [n, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
input = input.split(' ').map(Number);

const isPrime = (n) => {
    if(n < 2) return false;
    for(let i = 2; i <= n**0.5; i++) {
        if(n % i == 0) return false;
    }
    return true;
}

let answer = 0;
for(let i = 0; i < Number(n); i++) {
    if(isPrime(input[i])) answer++;
}
console.log(answer);