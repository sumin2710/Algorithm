function solution(a, b) {
    const months = [31,29,31,30,31,30,31,31,30,31,30,31];
    const days = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    let dayCount = b;
    for(let i=0; i<a-1; i++)
        dayCount += months[i];
    return days[dayCount%7];
}