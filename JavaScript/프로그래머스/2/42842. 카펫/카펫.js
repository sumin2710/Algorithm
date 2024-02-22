function solution(brown, yellow) {
    let n = brown+yellow;
    for(let w=n-1; w>0; w--){
        if(n%w !== 0) continue;
        let h = n/w;
        let y_area = (w-2)*(h-2);// 테두리 1줄 : 갈색
        let b_area = n-y_area;
       // console.log(y_area, b_area);
        if(y_area == yellow && b_area == brown){
            return [w, h];
        }
    }
}