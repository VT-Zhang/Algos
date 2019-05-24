/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) sum += nums[i];
    if (sum % k !== 0) return false;

    let used = Array.from({length: nums.length}, x => false);
    let n = sum / k, left = nums.length;

    return (function search(start, target) {
        if (left === 0) return true;
        if (target === 0) return search(0, n);
        for (let i = start; i < nums.length; i++) {
            if (nums[i] > n) return false;
            if (!used[i] && nums[i] <= target) {
                used[i] = true;
                left--;
                if (search(i + 1, target - nums[i])) return true;
                used[i] = false;
                left++;
            }
        }
        return false;
    })(0, n);
}

console.log(canPartitionKSubsets([4, 3, 2, 3, 5, 2, 1], 4));


