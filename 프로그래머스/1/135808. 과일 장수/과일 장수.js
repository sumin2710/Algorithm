function solution(k, m, score){
  let answer = 0;
  // score.slice()로 score 복사 
  let sortedScore = score.sort((a,b) => a-b).slice(score.length%m);
  console.log(sortedScore);
  for(let i=0; i< sortedScore.length; i += m){
    answer += sortedScore[i]*m;
  }
  return answer;
}