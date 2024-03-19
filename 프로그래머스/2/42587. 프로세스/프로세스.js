function solution(priorities, location) {
    let cnt = 0; // 실행한 프로세스 개수
    let max = Math.max(...priorities);
    while(true) {
        let head = priorities.shift();
        if(head === max) {
            cnt += 1;
            if(location === 0) return cnt;
            max = Math.max(...priorities);
        }else {
            priorities.push(head);
        }
        location = location !== 0 ? location-1 : priorities.length-1;
    }
}