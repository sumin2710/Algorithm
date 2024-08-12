let n = Number(require('fs').readFileSync(0, 'utf-8').trim());

let max = 1, diagonal = 1; // max : 현재까지 나온 분수 총 개수, diagonal : n번째 분수가 속한 대각선의 번호

while(max < n) { // max === n이면 종료
    max += diagonal++ + 1;  // diagonal : 2, 3, 4 ... // max : 3, 6, 10 ... 
}

const idx = diagonal - (max - n); // diagonal번째 대각선(diagonal개의 요소)의 idx번째 분수

if(diagonal % 2) { // 홀수번째 대각선은 아래에서 위로 증가
   console.log(`${diagonal - idx + 1}/${idx}`); 
}else {
    console.log(`${idx}/${diagonal - idx + 1}`);
}