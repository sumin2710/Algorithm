let [n, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let answer = 0;

const calculateStrikeBall = (hint, guess) => {
    let strike = 0, ball = 0;
    for(let i=0; i<3; i++) {
        if(hint[i] == guess[i]) strike++;
        else if(hint.includes(guess[i])) ball++;
    }
    return [strike, ball];
}

for(let i=1; i<=9; i++) {
    for(let j=1; j<=9; j++) {
        for(let k=1; k<=9; k++) {
            if(i == j || j == k || i == k) continue; 
            // 답한거 테스트
            let isValid = true;
            for(let idx=0; idx<parseInt(n); idx++) {
                let [hint, strike, ball] = input[idx].split(' ').map(Number);
                let [strikeCount, ballCount] = calculateStrikeBall(hint.toString().split('').map(Number), [i,j,k]);
                if(strikeCount !== strike || ballCount !== ball) {
                    isValid = false;
                    break;
                }
            }
            if(isValid) answer++;
        }
    }
}
console.log(answer);

