function solution(keymap, targets) {
    var answer = new Array(targets.length).fill(-1);
    // targets 순회
    for(let i=0; i< targets.length; i++){
        const target = targets[i];
        let cnt = 0;
        // target의 각 문자를 순회 // 'ABCD'
        for(let j=0; j<target.length; j++){
            const ch = target[j]; //'A'
            // keymap의 각 요소 중 ch를 포함하는 문자의 minimum index 구하기
            const min = Math.min(...keymap.map(v => {
                const idx = v.indexOf(ch);
                return idx === -1 ? Infinity : idx+1;
            })); // idx가 -1(문자열 만들 수 없다)면 Infinity 아니면 idx+1번 클릭 가능
            if(min === Infinity){ // 문자열 못만들면 
                cnt = -1; 
                break;  // target의 각 요소 순회 중지
            }
            cnt += min; // 횟수에 최소 횟수 더해주기
        }
        answer[i] = cnt;
    }
    return answer;
}