/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
    let res = 0;
    while (n > 4) {
        res += Math.floor(n/=5);
    }
    return res;
}

console.log(trailingZeroes(3));
console.log(trailingZeroes(5));
