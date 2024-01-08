const solution = (left, right) => {
    let sum = 0;
    for(let i=left; i<=right; i++){
        let divisorCnt = 0;
        for(let j=1; j<=i/2; j++){
            if(i%j === 0) divisorCnt++;
        }
        (divisorCnt % 2 === 0) ? sum += i : sum -= i;
    }return -sum;
}