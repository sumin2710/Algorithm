const solution = (n) => {
    let rslt = 0;
    for(let i=1; i<=n; i++){
        if(n % i === 0) rslt += i;
    }return rslt;
};