function solution(arr) {
    let answer = 0;
    arr.sort((a,b) => a-b);
    let i = arr[0], j = 1, k = 1, len = arr.length-1;
    while(true){
        if((i*j) % arr[k] === 0){
            if(k === len){
                answer = i*j;
                break;
            }
            i = i*j;
            k += 1;
            j = 1; continue;
        }
        j += 1;
    }
    return answer;
}