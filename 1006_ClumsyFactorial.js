/**
 * @param {number} N
 * @return {number}
 */
function clumsy(N) {
    if (N === 1) return 1;
    if (N === 2) return 2;
    if (N === 3) return 6;
    if (N === 4) return 7;
    if (N % 4 === 1) return N + 2;
    if (N % 4 === 2) return N + 2;
    if (N % 4 === 3) return N - 1;
    return N + 1;
}


console.log(clumsy(4));
console.log(clumsy(10));
console.log(clumsy(5));
