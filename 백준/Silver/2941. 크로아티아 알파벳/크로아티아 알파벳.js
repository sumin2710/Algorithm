let s = require('fs').readFileSync(0, 'utf-8').trim();
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
for (let i = 0; i < croatia.length; i++) {
  s = s.replaceAll(croatia[i], +i);
}
console.log(s.length);
