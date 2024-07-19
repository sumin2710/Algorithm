let [n, ...checker] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
n = Number(n)

checker = checker.map(v => v.split(' ').map(Number)) // [[x1,y1],[x2,y2]]
checkerX = checker.map(v => v[0]) // [x1, x2]
checkerY = checker.map(v => v[1]) // [y1, y2]
answer = new Array(n).fill(-1); // [-1, -1]

for(const x of checkerX) {
    for(const y of checkerY) {
        // x, y => 후보 지점
        let dist = []; // 각 체커와 후보 지점까지의 거리
        for(const [cx, cy] of checker) {
            dist.push(Math.abs(cx - x) + Math.abs(cy - y));
        }
        
        // 거리 가까운 순으로 정렬
        dist.sort((a, b) => a - b);
        
        // 최소 거리 합 계산
        let minDist = 0;
        for(let i = 0; i < dist.length; i++) {
            minDist += dist[i];
            if(answer[i] == -1) {
                answer[i] = minDist;
            }else {
                answer[i] = Math.min(minDist, answer[i]);
            }
        }
    }
}

console.log(answer.join(' ').trim());