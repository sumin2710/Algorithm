function solution(X, Y) {
    var answer = '';
    for(let i=9; i>=0; i--){
        let x = [...X].filter((v) => v === ''+i).length;
        let y = [...Y].filter((v) => v === ''+i).length;
        answer += (''+i).repeat(Math.min(x,y));
    }
    if(answer.length === 0) answer = '-1';
    let zeroCnt = [...answer].filter((v) => v === '0').length;
    if(zeroCnt === answer.length) answer = '0';
    return answer;
}