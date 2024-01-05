const solution = (x) => {
    const n = (x+"").split("").map((v) => parseInt(v)).reduce((a,c) => a+c);
    return (x%n==0) ? true : false;
}