process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); // a=n, b=m
    // for(let i=0; i<b; i++){
    //     for(let j=0; j<a; j++){
    //         process.stdout.write('*'); //줄바꿈 없이
    //     }console.log()
    // }
    const row = `${'*'.repeat(a)}\n`
    console.log(row.repeat(b))
});