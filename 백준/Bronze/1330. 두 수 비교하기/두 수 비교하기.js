var input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);
var a = input[0]
var b = input[1]
if(a>b) {
    console.log('>')
}else if(a<b){
    console.log('<')
}else{
    console.log('==')
}