/**
 * @param {number} K
 * @return {number}
 */
function smallestRepunitDivByK(K) {
    if (K % 2 === 0 || K % 5 === 0) {
        return -1;
    }
    let a = 0;
    for (let i = 1; i <= K; i++) {
        if ((a = (a * 10 + 1) % K) === 0) {
            return i;
        }
    }
    return -1;
}

console.log(smallestRepunitDivByK(1));
console.log(smallestRepunitDivByK(2));
console.log(smallestRepunitDivByK(3));
console.log(smallestRepunitDivByK(7));
