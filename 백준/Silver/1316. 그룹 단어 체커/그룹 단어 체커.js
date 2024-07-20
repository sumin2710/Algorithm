let [n, ...words] = require("fs")
  .readFileSync(0, 'utf-8')
  .trim()
  .split("\n");

let groupCount = 0;
for (const word of words) {
  let isValid = true, seen = new Set();
    
  for (let i = 0; i < word.length; i++) {
    if (!seen.has(word[i])) {
      seen.add(word[i]);
    } else {
      // 이전 문자와 다르면, 
      if (word[i - 1] !== word[i]) {
        isValid = false;
        break;
      }
    }
  }

  if (isValid) {
    groupCount++;
  }
}
console.log(groupCount);