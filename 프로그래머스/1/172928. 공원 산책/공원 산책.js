function solution(park, routes) {
    let i = park.findIndex((v) => v.includes('S')), j = park[i].indexOf('S');
    let len_i = park.length, len_j = park[0].length;
    
    routes.forEach((r) => {
        let [op, n] = r.split(' ');
        let tmp_i = i, tmp_j = j, flag = true;
        for(let k=0; k<n; k++){
            if(op === 'N') tmp_i -= 1;
            else if(op === 'S') tmp_i += 1;
            else if(op === 'W') tmp_j -= 1;
            else if(op === 'E') tmp_j += 1;
            
            if(tmp_j < 0 || tmp_j >= len_j || tmp_i < 0 || tmp_i >= len_i || park[tmp_i][tmp_j] === 'X'){
                flag = false;
                break;
            }
        }
        if(flag){
            i = tmp_i;
            j = tmp_j;
        }
    })
    return [i,j];
}