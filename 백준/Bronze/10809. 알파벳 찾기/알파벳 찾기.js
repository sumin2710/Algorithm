let s = require('fs').readFileSync(0, 'utf-8').trim();
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let answer = new Array(26).fill(-1);
alphabet = alphabet.split('');
for(let i=0; i<s.length; i++) {
    let idx = alphabet.indexOf(s[i]);
    if(idx > -1 && answer[idx] === -1) {
        answer[idx] = i;
    }
}
console.log(answer.join(' ').trim());