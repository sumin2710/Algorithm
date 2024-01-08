const solution = (s) => {
    // let n = s.length;
    // if(n %2 === 0){
    //     return [...s].splice(n/2-1, 2).join('');
    // }
    // return [...s].splice(n/2, 1).join('');
    let n = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[n] : s[n-1]+s[n];
}