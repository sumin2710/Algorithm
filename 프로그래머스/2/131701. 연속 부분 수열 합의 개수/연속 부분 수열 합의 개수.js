function solution(elements) {
    let set = new Set(elements);
    const len = elements.length;
   // console.log('초기화', set);
    const add = (n) => {
        for(let i=0; i<len; i++){
            let sum = 0;
            for(let j=0; j<n; j++){
                sum += elements[(i+j) % len];
            }
            set.add(sum);
        }
    }
    for(let i=1; i<len; i++){
        add(i+1);
       // console.log('중간테스트', set);
    }
   // console.log(set)
    return set.size;
}