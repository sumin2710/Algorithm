const solution = (left, right) => {
    let sum = 0;
    for(let i=left; i<=right; i++){
        if(Number.isInteger(Math.sqrt(i))){ // 제곱근이 정수면 약수 개수가 홀수
            sum -= i;
        }else{
            sum += i;
        }
    }return sum;
}