function solution(n,a,b)
{// a < b
    let i;
    for(i=1; i<=n/4; i++){
        if(a%2 === 0){
            if((a-1) == b) break;
        }else{
            if((a+1) == b) break;
        }
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
    }

    return i;
}