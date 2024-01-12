function solution(s) { 
    let answer = '';
    const nums = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    
    for(let i=0; i<10; i++){
        if(s.includes(nums[i])){
            s = s.replaceAll(nums[i], i+'');
        }
    }return parseInt(s);
}