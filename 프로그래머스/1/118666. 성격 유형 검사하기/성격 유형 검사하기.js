function solution(survey, choices) {
    var answer = '';
    let mbti = {'R':0, 'T':0, 'C':0, 'F':0, 'J':0, 'M':0, 'A':0, 'N':0};
    let score = [3,2,1,0,1,2,3];
    
    survey.forEach((v,i) => {
        console.log(v[0], v[1])
        if(choices[i]-1 < 4){
            mbti[v[0]] += score[choices[i]-1];
        }else{
            mbti[v[1]] += score[choices[i]-1];
        }
    })
    //console.log(mbti)
    let keys = Object.keys(mbti)
    //console.log(keys)
    for(let i=0; i<keys.length; i++){
        if(mbti[keys[i]] >= mbti[keys[i+1]]){
            answer += keys[i];
        }else{
            answer += keys[i+1]
        }
        i += 1;
    }
    return answer;
}