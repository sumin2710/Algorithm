function solution(s) {
    var answer = '';
    let list = s.split(' ');
    let rslt = list.map((word) => {
        word = word.split('');
        for(let i=0; i<word.length; i++){
            if(i % 2===0 || i === 0){
                word[i] = word[i].toUpperCase();
            }else{
                word[i] = word[i].toLowerCase();
            }
        }return word.join('');
    }); 
    return rslt.join(' ');
}