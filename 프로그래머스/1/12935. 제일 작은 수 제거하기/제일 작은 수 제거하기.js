const solution = (arr) => {
    let min = Math.min(...arr);
    let minIdx = arr.indexOf(min);
    arr.splice(minIdx, 1);
    return arr.length === 0 ? [-1] : arr;
}