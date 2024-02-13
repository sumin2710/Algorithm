function solution(s) {
    let answer = s.split(' ').map((v) => v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
    return answer.join(' ');
}