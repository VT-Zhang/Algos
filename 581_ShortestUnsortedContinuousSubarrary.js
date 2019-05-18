/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    let sortedNums = nums.slice();
    sortedNums.sort((a, b) => (a - b));
    let start = nums.length - 1, end = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortedNums[i]) {
            start = Math.min(start, i);
            end = Math.max(end, i);
        }
    }
    if (end <= start) {
        return 0;
    }
    return end - start + 1;
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
