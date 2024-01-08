const solution = (s) => {
    let n = s.length;
    if(n %2 === 0){
        return [...s].splice(n/2-1, 2).join('');
    }
    return [...s].splice(n/2, 1).join('');
}