function solution(number) {
    var answer = 0
    let len = number.length;
    for(let i=0; i<len; i++){
        for(let j=i+1; j<len; j++){
            for(let k=j+1; k<len; k++){
                if(number[i] + number[j] + number[k] === 0)
                    answer += 1
            }
        }
    }
    return answer;
}