let [m, n] = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(Number);

const primes = [];

if (m < 2) m = 2;

for (let i = m; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) primes.push(i);
}

if (primes.length === 0) {
  console.log(-1);
} else {
  console.log(`${primes.reduce((v, c) => v + c, 0)}\n${primes[0]}`);
}
