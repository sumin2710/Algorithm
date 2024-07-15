var input = require('fs').readFileSync(0, 'utf8').trim();
var n = parseInt(input);
if(n % 4 === 0 && (n % 100 !== 0 || n % 400 === 0)) {
    console.log(1);
}else{
    console.log(0);
}