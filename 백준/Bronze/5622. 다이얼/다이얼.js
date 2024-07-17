let s = require('fs').readFileSync(0, 'utf-8').trim().split('');
let phone = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
let answer = 0;
const find = (r) => {
    for(let i=0; i<phone.length; i++) {
        if(phone[i].split('').includes(r)) return i+2;
    }
}
for(let i=0; i<s.length; i++) {
    answer += (2 + find(s[i]) - 1);
}
console.log(answer);