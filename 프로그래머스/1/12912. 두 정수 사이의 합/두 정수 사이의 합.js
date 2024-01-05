const solution = (a,b) => {
    if(a>b){
        const tmp = b;
        b = a; a = tmp;
    }else if(b === a) return a;
    let sum = 0;
    for(let i=a; i<=b; i++){
        sum += i;
    }return sum;
}