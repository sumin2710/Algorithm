let input = require('fs').readFileSync(0, 'utf-8').trim().split(' ');
console.log(input.filter(v => v !== '').length);