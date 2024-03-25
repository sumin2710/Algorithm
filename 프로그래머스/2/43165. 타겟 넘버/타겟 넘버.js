function solution(numbers, target) {
    var answer = 0;
    
    function DFS(idx, sum) {
        if(idx === numbers.length) { // numbers의 모든 숫자를 사용
            if(sum === target) { // 합계 === target이면,
                answer += 1; // 경우의 수 ++1
            }
            return; // 재귀 종료
        }
        DFS(idx+1, sum + numbers[idx]); // 현재 숫자 더하는 경우
        DFS(idx+1, sum - numbers[idx]); // 현재 숫자 빼는 경우
    }
    
    DFS(0, 0) // idx = 0, sum = 0
    return answer;
}