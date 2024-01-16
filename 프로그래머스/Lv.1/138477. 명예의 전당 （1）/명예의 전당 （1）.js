function solution(k, score) {
    var answer = [];
    var rslt = [];
    for(let i=0; i<score.length; i++){
        answer.push(score[i]);      
        if(answer.length > k){
            answer.splice(answer.indexOf(Math.min(...answer)), 1);
            rslt.push(Math.min(...answer));
        }else{
            rslt.push(Math.min(...answer));
        }
    }
    return rslt;
}