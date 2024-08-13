let [n, ...words] = require('fs').readFileSync(0, 'utf-8').split('\n');
words = [...new Set(words)];
words.sort();
words.sort((a,b) => a.length - b.length);
console.log(words.join('\n').trim());