let [t, ...arr] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let answer = '';
for(let i=0; i<Number(t); i++) {
    let tmp = arr[i].split('');
    answer += `${tmp[0]}${tmp.pop()}\n`
}
console.log(answer.trim());