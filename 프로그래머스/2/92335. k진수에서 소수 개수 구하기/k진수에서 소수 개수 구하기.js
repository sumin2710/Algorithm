function solution(n, k) {
    var answer = 0;
    
    // 진수 변환
    n = n.toString(k);
    
    n = n.split('0').map(Number).filter((v) => v !== 0 && v !== 1);
    
    // 소수 검증
     function isPrime(num) {
        for(let i=2; i<=Math.sqrt(num); i++) {
            if(num % i === 0) 
                return false;
        }
        return true;
    }
    
    for(let i=0; i<n.length; i++) {
        if(isPrime(n[i])) {
            answer += 1;
        }
    }
    
    return answer;
}