function solution(number, limit, power) {
    var answer = 0;
    const divisor = (n) => {
        let cnt = 0;
        for(let i=1; i<=Math.sqrt(n); i++){
            if(n%i === 0){
                if(n/i === i) cnt+=1;
                else cnt+=2;
            }
        }
        return cnt;
    }
    for(let i=1; i<=number; i++){
        let cnt = divisor(i);
        if(cnt <= limit) answer +=cnt;
        else answer += power;
    }
    return answer;
}