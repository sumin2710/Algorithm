let [n, k] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const prime = [];
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    prime.push(i);
    if (n / i !== i) prime.push(n / i);
  }
}

prime.sort((a, b) => a - b);
if (prime.length < k) {
  console.log(0);
} else {
  console.log(prime[k - 1]);
}
