function solution(n) {
    let fibo = new Array(n).fill(0);
    if(n > 0){
        fibo[1] = 1;
        for(let i=2; i<=n; i++){
            fibo[i] = (fibo[i-2] + fibo[i-1])%1234567;
        }
    }
    return fibo[n];
    
    // function fibo(n) {
    // /if(n < 1) return n;
    //  return fibo(n-1) + fibo(n-2);   
    // }
}