function solution(s) {
    var answer = [], count = 0, idx = 0;
    while(s !== '1'){
        count += [...s].filter((v) => v == '0').length;
        s = [...s].filter((v) => v === '1').length.toString(2);
        idx += 1;
    }
    answer.push(idx, count);
    return answer;
}