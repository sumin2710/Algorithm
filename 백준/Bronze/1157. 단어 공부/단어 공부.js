let s = require('fs').readFileSync(0, 'utf-8').trim();
s = s.toUpperCase();
let word = [],
  wordCount = [];
// 개수 세기
for (let i = 0; i < s.length; i++) {
  let ch = s[i];
  let idx = word.indexOf(ch);
  if (idx == -1) {
    // 없으면,
    word.push(ch);
    wordCount.push(1);
  } else {
    wordCount[idx] += 1;
  }
}

let tmp = wordCount.slice().sort((a, b) => b - a);
if (tmp[0] == tmp[1]) {
  console.log("?");
} else {
  let max = 0,
    maxIdx = 0;
  for (let i = 0; i < wordCount.length; i++) {
    if (max < wordCount[i]) {
      max = wordCount[i];
      maxIdx = i;
    }
  }
  console.log(word[maxIdx]);
}
