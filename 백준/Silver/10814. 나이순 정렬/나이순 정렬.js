let [n, ...members] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
members = members.map((v) => v.split(' '));
members.sort((a, b) => {
  return a[0] - b[0];
});
console.log(
  members
    .map((v) => v.join(' '))
    .join('\n')
    .trim()
);