/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
function canMeasureWater(x, y, z) {
    if (x + y < z) {
        return false;
    }
    if (x === z || y === z || x + y === z) {
        return true;
    }
    return z % GCD(x, y) === 0;
}

function GCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(canMeasureWater(3, 5, 4));
console.log(canMeasureWater(2, 6, 5));
