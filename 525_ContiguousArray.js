/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxLength(nums) {
    if (nums.length < 2) {
        return 0;
    }
    let sums = [0];
    let maxIndexes = {"0": 0};
    for (let i = 0; i < nums.length; i++) {
        sums.push(sums[i] + (nums[i] || -1));
        maxIndexes[sums[i + 1]] = i + 1;
    }
    let max = 0;
    for (let i = 0; i < sums.length; i++) {
        max = Math.max(max, maxIndexes[sums[i]] - i);
    }
    return max;
}
