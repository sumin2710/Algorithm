const solution = (N) => {
    let n = N.toString();
    return [...n].reduce((a,v) => Number(a)+Number(v), 0);
}