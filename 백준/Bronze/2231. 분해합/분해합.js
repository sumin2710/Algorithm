let n = Number(require('fs').readFileSync(0,'utf-8').trim())
for (let i = 1; i <= n; i++) {
  const arr = i.toString().split('').map(Number);

  let sum = arr.reduce((a, c) => a + c, 0) + i;

  if (sum === n) {
    console.log(arr.join(''));
    break;
  }
    
  if(i === n) {
      console.log(0);
  }
}
