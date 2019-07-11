/**
 * @param {number} N
 * @return {number}
 */
function bitwiseComplement(N) {
    let x = 1;
    while (N > x) {
        x = x * 2 + 1;
    }
    return x - N;
}

console.log(bitwiseComplement(5));
console.log(bitwiseComplement(7));
console.log(bitwiseComplement(10));
