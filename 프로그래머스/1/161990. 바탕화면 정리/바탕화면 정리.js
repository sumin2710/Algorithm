function solution(wallpaper) {
    var answer = [], x_min = 50, x_max = 0, y_min = 50, y_max = 0;
    for(let i=0; i<wallpaper.length; i++){
        for(let j=0; j<wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                //console.log(i, j);
                if(x_min > i) x_min = i;
                if(x_max < i) x_max = i;
                if(y_min > j) y_min = j;
                if(y_max < j) y_max = j;
            }
        }
    }
    //console.log(x_min, y_min, x_max, y_max)
    answer.push(x_min, y_min, x_max+1, y_max+1)
    return answer;
}