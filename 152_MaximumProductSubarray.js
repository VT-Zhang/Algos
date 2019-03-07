/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    let res = -Number.MAX_SAFE_INTEGER;
    let min = 1;
    let max = 1;
    for (let num of nums) {
        [min, max] = [
            Math.min(num, min*num, max*num),
            Math.max(num, min*num, max*num)
        ];
        res = Math.max(res, max);
    }
    return res;
}

console.log(maxProduct([2,3,-2,4]));
