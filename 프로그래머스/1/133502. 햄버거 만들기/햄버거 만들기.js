function solution(ingredient) {
    var answer = 0, stack = [];
    ingredient.forEach((v, idx) => {
        stack.push(v);
        if(stack.length >= 4){
            if(stack[stack.length-4] === 1 && stack[stack.length-3] === 2
              && stack[stack.length-2] === 3 && stack[stack.length-1] === 1){
                answer += 1;
                stack.splice(stack.length-4, 4);
            }
        }
    })
    return answer;
}