let n = require('fs').readFileSync(0, 'utf-8').trim();
n = Number(n);
const answer = [];
const primeFactorization = (i) => {
    while(n % i === 0) {
        answer.push(i);
        n /= i;
    }
};

// 2
primeFactorization(2);
// 3, 5, ...
for(let i = 3; i <= n**0.5; i += 2) {
    primeFactorization(i);
}
if(n > 1) answer.push(n);

console.log(answer.join('\n'));