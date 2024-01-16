function solution(a, b, n) {
    var answer = 0;
    let tmp = 0
    while(n >= a){
        tmp = Math.floor(n/a);
        answer += b*tmp;
        n = n - a*tmp + b*tmp;
    }
    return answer;
}