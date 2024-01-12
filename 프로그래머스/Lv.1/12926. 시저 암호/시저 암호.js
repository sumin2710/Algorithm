function solution(s, n) {
    var answer = '';
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower = [...upper].map((v) => v.toLowerCase()).join('');
    
    for(let i=0; i<s.length; i++){
        let ch = s[i];
        if(ch === ' '){
            answer += ' ';   
            continue;
        }
        let which = upper.includes(ch) ? upper : lower;
        let idx = which.indexOf(ch) + n;
        idx = idx >= 26 ? idx-26 : idx;
        answer += which[idx];
    }
    return answer;
}