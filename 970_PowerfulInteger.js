/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
function powerfulIntegers(x, y, bound) {
    let set = new Set();
    for (let i = 1; i < bound; i *= x) {
        for (let j = 1; i + j <= bound; j *= y) {
            set.add(i + j);
            if (y === 1) {
                break;
            }
        }
        if (x === 1) {
            break;
        }
    }
    return Array.from(set);
}

console.log(powerfulIntegers(2,3,10));
console.log(powerfulIntegers(3,5,15));
