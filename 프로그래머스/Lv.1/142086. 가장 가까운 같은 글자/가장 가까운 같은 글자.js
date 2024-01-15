function solution(s) {
    var answer = [];
    for(let i=0; i<s.length; i++){
        let flag = false;
        for(let j=i-1; j>=0; j--){
            if(s[i] === s[j]){
                flag = true;
                answer.push(i-j);
                break;
            }
        }
        if(flag === false){
            answer.push(-1);
        }
    }
    return answer;
}