const solution = (n) => {
    n = (n+"").split("").map(v=>parseInt(v)).sort((a,b)=>b-a).join("");
    return parseInt(n);
}