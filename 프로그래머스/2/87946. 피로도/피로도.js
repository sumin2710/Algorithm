//let answer = 0;

function solution(k, dungeons) {    
    let answer = 0;
    let isVisited = new Array(dungeons.length).fill(0); 
    
    function dfs(k, cnt, dungeons, isVisited) {
        answer = Math.max(answer, cnt);
        for (let i = 0; i < dungeons.length; i++) {
            if (isVisited[i] === 0 && k >= dungeons[i][0]) { // 방문안했고, 피로도가 충분하면
                isVisited[i] = 1; // 방문함

                dfs(k - dungeons[i][1], cnt + 1, dungeons, isVisited); 
                isVisited[i] = 0; // 피로도, cnt, 방문 배열을 방문 전으로 복구
            }
        }
    }
    
    dfs(k, 0, dungeons, isVisited); 
    return answer;
}
