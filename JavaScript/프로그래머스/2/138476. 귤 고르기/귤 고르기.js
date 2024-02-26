function solution(k, tangerine) {
    var answer = 0;
    let result = {};
    tangerine.forEach((item) => {
        result[item] = (result[item] || 0) + 1; // undefined면 0으로 초기화
    });
    result = Object.entries(result).sort((a,b) => b[1] - a[1]);
    let cnt = 0;
    for(let i=0; i<result.length; i++){
        if(k <= cnt) break;
        else{
            cnt += result[i][1];
            answer += 1;
        }
    }
    return answer;
}