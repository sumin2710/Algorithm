function solution(citations) {
    let maxCount = 0;
    for(let i=0; i<citations.length; i++){
        // citations 를 순회해가며 각 논문의 인용 횟수보다 같거나 큰 논문의 개수(본인 포함)
        let quoteCount = citations.filter((citation) => citation >= citations[i]).length;
        if(quoteCount <= citations[i] && maxCount < quoteCount){
            maxCount = quoteCount;
        }
        //console.log('테스트', citations[i], quoteCount, maxCount);
    }
    return maxCount;
}