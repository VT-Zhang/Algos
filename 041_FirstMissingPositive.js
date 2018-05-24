// Given an unsorted integer array, find the smallest missing positive integer.
//
//     Example 1:
//
// Input: [1,2,0]
// Output: 3
// Example 2:
//
// Input: [3,4,-1,1]
// Output: 2
// Example 3:
//
// Input: [7,8,9,11,12]
// Output: 1
// Note:
//
//     Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    if (nums.length === 0 || (nums.length === 1 && nums[0] > 1)) {
        return 1;
    }
    nums.sort((a, b) => {
        return a - b;
    });
    console.log(nums);
    for (let i = 0; i < nums.length - 1; i++) {
        if ((i === 0 && nums[i] > 1) ||
            (nums[i] <= 0 && nums[i + 1] > 0 && nums[i + 1] !== 1)) {
            return 1;
        }
        if (nums[i] === nums[i + 1]) {
            nums.splice(i,1);
            i--;
        }
        if (nums[i + 1] - nums[i] !== 1 && nums[i] > 0) {
            return nums[i] + 1;
        }
    }
    return nums[nums.length - 1] + 1;
}

console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([7,8,9,11,12]));
console.log(firstMissingPositive([]));
console.log(firstMissingPositive([2]));
console.log(firstMissingPositive([1000, -1]));
console.log(firstMissingPositive([0,1,1,1,2,2]));


