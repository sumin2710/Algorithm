function solution(answers) {
    var result = [0,0,0];
    let s1 = [1,2,3,4,5];
    let s2 = [2,1,2,3,2,4,2,5];
    let s3 = [3,3,1,1,2,2,4,4,5,5];
    let len = answers.length;
    for(let i=0; i<len; i++){
        if(s1[i%5] == answers[i]) result[0]++;
        if(s2[i%8] == answers[i]) result[1]++;
        if(s3[i%10] == answers[i]) result[2]++;
    }
    let max = Math.max(...result);
    let answer = [];
    for(let i=0; i<3; i++){
        if(result[i] == max) answer.push(i+1);
    }
    return answer;
}