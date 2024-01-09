function solution(n, m) {
    var answer = [];
    let tmp = 1;
    for(let i=1; i<=Math.max(n,m); i++){
        if(n%i === 0 && m%i === 0){
            tmp = i;
        }
    }
    answer.push(tmp);
    
    let i = Math.min(n,m); // 3
    let j = 1;
    while(true){
        if((i*j) % Math.max(n,m) === 0){
            answer.push(i*j);
            break;
        }j++;
    }
    return answer;
}