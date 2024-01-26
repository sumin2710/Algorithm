function solution(keymap, targets) {
    const clickNum = (ch) => {
        let min = 100;
        keymap.forEach((key) => {
            const tmp = [...key].indexOf(ch);
            if(tmp !== -1 && tmp < min){
                min = tmp;
            }
        });
        return min+1;
    };
    var answer = Array(targets.length).fill(0);
    targets.forEach((target, idx) => {
        for(let ch of [...target]){
            let tmp = clickNum(ch);
            console.log(tmp)
            if(tmp === 101){
                answer[idx] = -1;
                break;
            }else answer[idx] += tmp;
        }
    })
    return answer;
}