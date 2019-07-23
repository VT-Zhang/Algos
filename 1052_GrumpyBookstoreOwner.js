/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
function maxSatisfied(customers, grumpy, X) {
    let max = 0;
    for (let i = 0; i <= customers.length - X; i++) {
        let res = 0;
        for (let j = 0; j < i; j++) {
            if (grumpy[j] === 0) {
                res += customers[j];
            }
        }
        for (let j = i; j < i + X; j++) {
            res += customers[j];
        }
        for (let j = i + X; j < customers.length; j++) {
            if (grumpy[j] === 0) {
                res += customers[j];
            }
        }
        max = max > res ? max: res;
    }
    return max;
}

console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3));
