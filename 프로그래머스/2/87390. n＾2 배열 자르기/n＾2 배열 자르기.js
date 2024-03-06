// function solution(n, left, right) {
//     var answer = [];
    
//     const first_row = Math.floor(left/n+1)
//     const last_row = Math.floor(right/n+1);
    
//     let arr = new Array(n).fill(0).map((v, i) => i+1); // 1234
//     for(let i=first_row; i<=last_row; i++){ // 2 ~ 4
//        answer = [...answer, ...arr.fill(i, 0, i)]; // 기존 answer에 추가 -> 0부터 i번째 인덱스까지 i로 채운 arr
//     }
 
//     return answer.splice(left%n, right-left+1);
// }
function solution(n, left, right) {
    var answer = [];

    for (let i = left; i <= right; i++) {
        answer.push(Math.max(i % n, parseInt(i / n)) + 1)
    }

    return answer;
}