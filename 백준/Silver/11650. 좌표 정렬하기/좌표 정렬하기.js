let [n, ...points] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
points = points.map(v => v.split(' ').map(Number));
points.sort((a,b) => {
    if(a[0] === b[0]) {
        return a[1] - b[1];
    }else {
        return a[0] - b[0];
    }
});
console.log(points.map(v => v.join(' ')).join('\n'));