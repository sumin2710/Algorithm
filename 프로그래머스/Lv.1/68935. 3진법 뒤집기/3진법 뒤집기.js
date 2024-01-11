function solution(n) {
    // 10진법 -> 3진법
    // 45 / 3 = 15 / 3 = 5 / 3 = 1 ... 2
    // 1200
    let converted3 = '';
    while(n >= 3){ // n이 3보다 크거나 같을때까지 나눌수 있음
        converted3 += (n % 3).toString();
        n = Math.floor(n/3);
        console.log(n)
    }
    console.log(converted3); // '002'
    
    let rslt = n.toString(); // '1'
    converted3 += rslt;
    console.log(converted3); // '0021'
    
    // 10진법으로 변환
    converted3 = converted3.split('');
    let answer = converted3.map(Number).reverse().reduce((a,c,i) => a+ c*(3**i),0);
    return answer
    // for(let i=0; i<converted3.length; i++){
    //     answer += converted3[i] * (3**i);
    // }
}