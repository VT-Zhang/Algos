// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
//
//     We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).
//
//     Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
//     Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.
// Note: The n belongs to [1, 10,000].

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    var count = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] < nums[i-1]) {
            if(count == 0) {
                return false;
            }
            if(i == 1 || nums[i] > nums[i-2]) {
                nums[i-1] = nums[i];
            }
            else {
                nums[i] = nums[i-1];
            }
            count--;
        }
    }
    return true;
};

console.log(checkPossibility([4,2,3]));
console.log(checkPossibility([4,2,1]));
console.log(checkPossibility([4,1,1]));
console.log(checkPossibility([1,3,2,1]));
console.log(checkPossibility([]));
console.log(checkPossibility([1,2]));
console.log(checkPossibility([3,4,2,3]));