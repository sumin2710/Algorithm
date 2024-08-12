let input = require('fs').readFileSync(0, 'utf-8')
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

let smallX = input[0][0],
  smallY = input[0][1];
let bigX = smallX,
  bigY = smallY;

for (const [x, y] of input) {
  if (smallX > x) smallX = x;
  if (smallY > y) smallY = y;
  if (bigX < x) bigX = x;
  if (bigY < y) bigY = y;
}

let answer = [];
answer.push([smallX, smallY]);
answer.push([smallX, bigY]);
answer.push([bigX, smallY]);
answer.push([bigX, bigY]);

const inputSet = new Set(input.map((v) => v.join(',')));
let [[x, y]] = answer.filter((v) => !inputSet.has(v.join(',')));
console.log(`${x} ${y}`);
