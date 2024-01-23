function solution(lottos, win_nums) {
    let matchCnt = win_nums.filter((v) => lottos.includes(v)).length;
    let zeroCnt = lottos.filter((v) => v === 0).length;
    let minRank = matchCnt === 0 ? 6 : 7-matchCnt;
    let maxRank = 7 - (matchCnt + zeroCnt) > 6 ? 6 : 7 - (matchCnt+zeroCnt);
    let answer = [];
    answer.push(maxRank, minRank);
    return answer;
}