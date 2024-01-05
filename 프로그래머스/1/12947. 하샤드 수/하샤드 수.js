const solution = (x) => {
    const n = (x+"").split("").map((v) => parseInt(v)).reduce((a,c) => a+c);
    if(x%n === 0) return true;
    return false;
}