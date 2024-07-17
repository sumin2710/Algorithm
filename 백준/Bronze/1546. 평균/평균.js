let [n, score] = require('fs').readFileSync(0, 'utf-8').split('\n');
let scores = score.split(' ').map(Number);
let max = Math.max(...scores);
scores = scores.map((v) => v / max * 100);
console.log((scores.reduce((a, b) => a + b, 0)) / parseInt(n));