function solution(sizes) {
    // [min, max] -> 오름차순 정렬
    sizes.map((v) => v.sort((a,b) => a-b));
    first = sizes.map((v) => v[0]);
    second = sizes.map((v) => v[1]);
    return Math.max(...first) * Math.max(...second);
}