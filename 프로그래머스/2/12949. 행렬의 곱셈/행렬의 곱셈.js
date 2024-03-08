function solution(arr1, arr2) {
    var answer = [[]];
    //answer[x][y] = sum(arr1의 x행 * arr2의 y열)
    //x = arr1의 행(가로)길이, y = arr2의 열(세로)길이, z = arr1의 열 또는 arr2의 행
    const x = arr1.length, y = arr2[0].length, z = arr1[0].length;
    for(let i=0; i<x; i++){
        answer[i] = [];
        for(let j=0; j<y; j++){
            let sum = 0;
    
            for(let k=0; k<z; k++){
        
                sum += arr1[i][k] * arr2[k][j];
            } 
             answer[i][j] = sum;
        }
    }
    return answer;
}