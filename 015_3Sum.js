/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            if (left - i > 1 && nums[left] === nums[left - 1]) {
                left++;
                continue;
            }
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
            }
            if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
