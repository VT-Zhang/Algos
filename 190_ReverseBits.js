/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let res = 0;
    let count = 32;
    while (count--) {
        res *= 2;
        res += n & 1;
        n = n >> 1;
    }
    return res;
}

console.log(reverseBits(43261596));
console.log(reverseBits(4294967293));
