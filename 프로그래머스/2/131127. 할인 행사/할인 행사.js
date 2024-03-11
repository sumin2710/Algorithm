function solution(want, number, discount) {
    var answer = 0;
    //10개 연속부분수열 뽑아서 want가 number 만큼 있는 수열의 개수
    for(let i=0; i<=discount.length-10; i++) { // discount 순회
        let flag = true;
        const tmp = discount.slice(i, i+10);
        for(let j=0; j<want.length; j++){
            // console.log(want[j],"의 개수:", tmp.filter((v) => v === want[j]).length, " 필요한 개수는:", number[j]);
            if(tmp.filter((v) => v === want[j]).length < number[j]) {
                flag = false;
                break;
            }
        }
        if(flag === true){
            answer += 1;
        }
    }
    return answer;
}