function solution(n, m, section) {
    var answer = 0, painted = 0;
    for(let s of section){
        if(painted < s){
            answer += 1;
            painted = s+m-1;
        }
    }
    return answer;
}