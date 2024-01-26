function solution(s) {
    var answer = 0, tmp = [];
    [...s].forEach((ch, idx) => {
        tmp.push(ch);
        let same = tmp.filter((v) => v === tmp[0]);
        let not_same = tmp.filter((v) => v !== tmp[0]);
        if(same.length === not_same.length){
            answer += 1;
            tmp = [];
        }
    })
    if(tmp.length != 0){
        answer += 1;
    }
    return answer;
}