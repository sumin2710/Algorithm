const solution = (number) => {
    let answer = 0
    // 중첩 for문 3개 or...
    const combi = (current, start) => {
        if(current.length === 3){
            answer += (current.reduce((a,c) => a+c)) === 0 ? 1 : 0;
        }
        for(let i=start; i<number.length; i++){
            combi([...current, number[i]], i+1); // current에 number[start] 추가하기
        }
    }
    combi([], 0);
    return answer;
}