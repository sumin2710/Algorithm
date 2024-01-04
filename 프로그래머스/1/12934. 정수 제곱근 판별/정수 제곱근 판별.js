const solution = (n) => {
    let x = Math.sqrt(n);
    if(x > 0 && x%1 === 0) return Math.pow(x+1, 2);
    return -1;
}