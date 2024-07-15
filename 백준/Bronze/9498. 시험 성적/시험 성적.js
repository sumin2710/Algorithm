// 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F
var input = require('fs').readFileSync('/dev/stdin').toString().trim();
var n = parseInt(input)
if(n < 60){
    console.log('F')
}else if(n < 70) {
    console.log('D')
}else if(n < 80) {
    console.log('C')
}else if(n < 90) {
    console.log('B')
}else {
    console.log('A')
}