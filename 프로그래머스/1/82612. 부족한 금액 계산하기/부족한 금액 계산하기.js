function solution(price, money, count) {
    let need = 0;
    for(let i=1; i<=count; i++){
        need += price*i;
    }
    return money-need >= 0 ? 0 : need-money;
}