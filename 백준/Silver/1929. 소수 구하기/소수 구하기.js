let [m, n] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

const primes = [];
for (let i = m; i <= n; i++) {
  if (isPrime(i)) {
    primes.push(i);
  }
}

console.log(primes.join('\n').trim());
