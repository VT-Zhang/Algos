/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
function maxAbsValExpr(arr1, arr2) {
    let temp = [], res = -Infinity;
    for (let i = -1; i <= 1; i += 2) {
        for (let j = -1; j <= 1; j += 2) {
            for (let k = 0; k < arr1.length; k++) {
                temp[k] = arr1[k] * i + arr2[k] * j + k
            }
            let max = Math.max.apply(Math, temp);
            let min = Math.min.apply(Math, temp);
            res = Math.max(res, max - min)
        }
    }
    return res;
}

console.log(maxAbsValExpr([1, 2, 3, 4], [-1, 4, 5, 6]));
console.log(maxAbsValExpr([1, -2, -5, 0, 10], [0, -2, -1, -7, -4]));
