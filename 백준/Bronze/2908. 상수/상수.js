let [a, b] = require('fs').readFileSync(0, 'utf-8').trim().split(' ');;
let newA = a.split('').reverse().join(''), newB = b.split('').reverse().join('');
let answer = 0;
if(parseInt(newA) > parseInt(newB)) {
    answer = parseInt(newA);
}else {
    answer = parseInt(newB);
}
console.log(answer);