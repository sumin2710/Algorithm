const solution = (x, n) => {
    let rslt = [];
    for(let i=0; i<n; i++){
        rslt.push(x+x*i);
    }return rslt;
}