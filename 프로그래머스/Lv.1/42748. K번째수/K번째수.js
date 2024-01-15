function solution(array, commands) {
    const answer = [];
    commands.forEach((v) => {
        const arr = [...array];
        const removed = arr.splice(v[0]-1, v[1]-v[0]+1);
        removed.sort((a,b) => a-b);
        answer.push(removed[v[2]-1]);
    })
    return answer;
}