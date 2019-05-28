/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function numSubarrayProductLessThanK(nums, k) {
    let count = 0;
    for (let low = 0, high = 0, product = 1; high < nums.length; high++) {
        product *= nums[high];
        while (product >= k) {
            product /= nums[low];
            low++;
        }
        count += Math.max(0, high - low + 1);
    }
    return count;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
