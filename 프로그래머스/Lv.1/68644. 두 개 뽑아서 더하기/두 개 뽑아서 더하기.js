function solution(numbers) {
    let answer = new Set();
    for(let i=0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            answer.add(numbers[i] + numbers[j]);
        }
    }
    let tmp = [...answer];
    return tmp.sort((a,b) => a-b);
}