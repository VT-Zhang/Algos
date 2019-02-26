/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    let i, left, right, current, sum;
    let length = nums.length;
    let res = Number.MIN_SAFE_INTEGER;
    nums.sort((a, b) => a - b);
    for (i = 0; i < length; i++) {
        current = nums[i];
        left = i + 1;
        right = length - 1;
        while (left < right) {
            sum = current + nums[left] + nums[right];
            if (Math.abs(target - sum) < Math.abs(target - res)) {
                res = sum;
            }
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }
    return res;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
