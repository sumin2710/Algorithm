let [a,b,c,d,e,f] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);
for(let x = -999; x <= 999; x++) {
    for(let y = -999; y <= 999; y++) {
        if(a*x + b*y == c && d*x + e*y == f) {
            console.log(`${x} ${y}`);
        }
    }
}