function solution(today, terms, privacies) {
    var answer = [];
    privacies.forEach((p, idx) => {
        let date = p.split(' ')[0];
        let year = +(date.split('.')[0]);
        let month = +(date.split('.')[1]);
        let day = +(date.split('.')[2])
        let term = p.split(' ')[1];
        let term_month = +(terms.filter((t) => t.split(' ')[0] === term).map((t) => t.split(' ')[1]));

        day += term_month * 28 - 1;
        if(day > 28){
            month += Math.floor(day/28);
            day %= 28;
            if(day === 0){
                month -= 1;
                day = 28;
            }
            if(month > 12){
                year += Math.floor(month / 12);
                month %= 12;
                if(month === 0){
                    year -= 1;
                    month = 12;
                }
            }
        }
        //console.log(year, month, day)
        let onul = today.split('.').map((v) => +v);
        if(onul[0] > year){
            answer.push(idx+1);
        }else if(onul[0] === year){
            if(onul[1] > month){
                answer.push(idx+1);
            }else if(onul[1] === month){
                if(onul[2] > day){
                    answer.push(idx+1)
                }
            }
        }
    })
    
    
    return answer;
}