/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
function flipLights(n, m) {
    if (m === 0 || n === 0) {
        return 1;
    }
    if (n === 1) {
        return 2;
    }
    if (n === 2) {
        return m === 1 ? 3:4;
    }
    if (m === 1) {
        return 4;
    }
    return m === 2 ? 7:8;
}

console.log(flipLights(1,1));
console.log(flipLights(2,1));
console.log(flipLights(3,1));
