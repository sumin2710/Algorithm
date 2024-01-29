function solution(s, skip, index) {
    let letter = 'abcdefghijklmnopqrstuvwxyz'.split('');
    letter = letter.filter((ch) => !skip.includes(ch));
    let answer = s.split('').map((ch) => letter[(letter.indexOf(ch)+index)%letter.length]);
    return answer.join('');
}