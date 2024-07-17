let s = require('fs').readFileSync(0, 'utf-8').trim();
let reversedS = s.split('').reverse().join('');
if(s === reversedS) {
    console.log(1)
}else {
    console.log(0)
}