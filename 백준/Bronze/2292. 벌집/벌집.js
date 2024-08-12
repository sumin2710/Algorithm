let n = require('fs').readFileSync(0, 'utf-8').trim();
n = Number(n);

if (n === 1) {
  console.log(1);
} else {
  let acc = 1;
  for (let i = 1; i < 1_000_000_000; i++) {
    acc += i * 6;
    if (n <= acc) {
      console.log(i + 1);
      break;
    }
  }
}
