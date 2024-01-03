const solution = (num_list) => {
    var answer = [0,0];
    for(let n of num_list)
        answer[n%2] += 1;
    return answer;
}