function solution(s) {
    var answer = 0, stack = [];
    [...s].forEach((ch, idx) => {
        stack.push(ch);
        let same = stack.filter((v) => v === stack[0]);
        let not_same = stack.filter((v) => v != stack[0]);
        
        if(same.length === not_same.length){
            answer += 1;
            stack = [];
        }
    })
     if(stack.length !== 0){
            answer += 1;
        }
    return answer;
}