let [n, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let sx = 0,
  sy = 0,
  lx = 0,
  ly = 0;
for (let i = 0; i < n; i++) {
  const [x, y] = input[i].split(' ').map(Number);
  if (i === 0) {
    sx = x;
    sy = y;
    lx = x;
    ly = y;
  } else {
    if (sx > x) sx = x;
    if (sy > y) sy = y;
    if (lx < x) lx = x;
    if (ly < y) ly = y;
  }
}

console.log((lx - sx) * (ly - sy));
