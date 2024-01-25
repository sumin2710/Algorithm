function solution(n, lost, reserve) {
    var answer = n - lost.length;
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    let new_lost = lost.filter((v) => !reserve.includes(v));
    let new_reserve = reserve.filter((v) => !lost.includes(v));
    answer += lost.length - new_lost.length;
    lost = new_lost;
    reserve = new_reserve;
        
    for(let student of lost){
        let tmp1 = reserve.indexOf(student-1), tmp2 = reserve.indexOf(student+1);
        if(tmp1 != -1){
            answer += 1;
            reserve.splice(tmp1, 1);
            continue;
        }else if(tmp2 != -1){
            answer += 1;
            reserve.splice(tmp2, 1);
        }
    }
    return answer;
}