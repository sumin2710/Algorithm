function solution(s) {
    var answer = '';
    const n = s.split(' ').map((v) => +v);
    let max = n[0], min = n[0];
    for(let i=0; i<n.length; i++){
        if(n[i] > max) max = n[i];
        else if(n[i] < min) min = n[i];
    }
    answer += `${min} ${max}`
    return answer;
}