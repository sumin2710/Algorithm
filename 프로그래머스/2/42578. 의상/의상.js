function solution(clothes) {
    var answer = 1;
    let kind_cnt = {};
    for(let i=0; i<clothes.length; i++) {
        if(kind_cnt[clothes[i][1]] === undefined) {
           kind_cnt[clothes[i][1]] = 1;
        }else {
            kind_cnt[clothes[i][1]] += 1;
        }
    }
    //console.log(kind_cnt) // { headgear: 2, eyewear: 1 }
    
    for(const [key, value] of Object.entries(kind_cnt)) {
        answer *= (value + 1);
    }
    return answer-1;
}