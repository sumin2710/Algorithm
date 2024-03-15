function solution(progresses, speeds) {
    var answer = [];
    const arr = [];
    for(let i=0; i<progresses.length; i++) {
        arr.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }

    let max = arr[0]; answer.push(1); let idx = 0;
    for(let i=1; i<arr.length; i++) {
        if(max < arr[i]) {
            answer.push(1);
            max = arr[i];
            idx += 1;
        }else {
            answer[idx] += 1;
        }
    }
    return answer;
}