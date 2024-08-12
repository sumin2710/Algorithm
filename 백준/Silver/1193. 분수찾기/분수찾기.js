let n = require('fs').readFileSync(0, 'utf-8').trim();
n = Number(n);

if (n === 1) {
  console.log('1/1');
} else {
  let acc = 1;
  for (let i = 2; i < 10_000_000; i++) {
    // i번째 이하 구하기 가능
    acc += i;
    if (n <= acc) {
      // i번째 요소들은 acc-i+1번째부터 시작
      // n번째 요소는 i번째 요소들 중 인덱스 n - (acc-i+1)에 해당
      let answer = [];
      for (let j = 1; j <= i; j++) {
        answer.push(`${j}/${i + 1 - j}`);
      }
      if (i % 2 !== 0) {
        answer.reverse();
      }
      
      console.log(answer[n - (acc - i + 1)]);
      break;
    }
  }
}
