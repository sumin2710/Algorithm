function solution(d, budget) {
    // 최대한 많은 부서를 지원 -> 오름차순 정렬
    d.sort((a,b) => a-b);
    while(d.reduce((a,c) => a+c, 0) > budget){
        d.pop();
    }
    return d.length;
}